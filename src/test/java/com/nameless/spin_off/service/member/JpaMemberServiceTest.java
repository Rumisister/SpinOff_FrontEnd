package com.nameless.spin_off.service.member;

import com.nameless.spin_off.StaticVariable;
import com.nameless.spin_off.dto.MemberDto;
import com.nameless.spin_off.entity.member.BlockedMemberStatus;
import com.nameless.spin_off.entity.member.Member;
import com.nameless.spin_off.entity.movie.Movie;
import com.nameless.spin_off.entity.hashtag.Hashtag;
import com.nameless.spin_off.exception.member.*;
import com.nameless.spin_off.exception.movie.NotExistMovieException;
import com.nameless.spin_off.exception.hashtag.NotExistHashtagException;
import com.nameless.spin_off.repository.member.MemberRepository;
import com.nameless.spin_off.repository.movie.MovieRepository;
import com.nameless.spin_off.repository.hashtag.HashtagRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.time.LocalDate;

import static com.nameless.spin_off.StaticVariable.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

//@Rollback(value = false)
@SpringBootTest
@Transactional
class JpaMemberServiceTest {

    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;
    @Autowired HashtagRepository hashtagRepository;
    @Autowired MovieRepository movieRepository;
    @Autowired EntityManager em;

    @Test
    public void 멤버_회원가입() throws Exception{
        //given
        String accountId = "aa";
        String accountPw = "aa";
        String name = "dd";
        String nickname = "ddd";
        LocalDate birth = LocalDate.now();
        String email = "cc";
        String profileImg = null;

        MemberDto.CreateMemberVO createMemberVO = new MemberDto
                .CreateMemberVO(accountId, accountPw, name, nickname,
                birth, email, profileImg);

        //when
        Long aLong = memberService.insertMemberByMemberVO(createMemberVO);

        //then
        Member member = memberRepository.getById(aLong);

        assertThat(member.getAccountId()).isEqualTo(accountId);
        assertThat(member.getAccountPw()).isEqualTo(accountPw);
        assertThat(member.getName()).isEqualTo(name);
        assertThat(member.getNickname()).isEqualTo(nickname);
        assertThat(member.getBirth()).isEqualTo(birth);
        assertThat(member.getEmail()).isEqualTo(email);
        assertThat(member.getProfileImg()).isEqualTo(profileImg);
    }

    @Test
    public void 멤버_회원가입_예외처리() throws Exception{
        //given
        String accountId = "aa";
        String accountPw = "aa";
        String name = "dd";
        String nickname = "ddd";
        LocalDate birth = LocalDate.now();
        String email = "cc";
        String profileImg = null;

        MemberDto.CreateMemberVO createMemberVO = new MemberDto
                .CreateMemberVO(accountId, accountPw, name, nickname,
                birth, email, profileImg);

        //when
        Long aLong = memberService.insertMemberByMemberVO(createMemberVO);

        //then
        assertThatThrownBy(() -> memberService.insertMemberByMemberVO(createMemberVO))
                .isInstanceOf(AlreadyAccountIdException.class);

        createMemberVO.setNickname("");
        assertThatThrownBy(() -> memberService.insertMemberByMemberVO(createMemberVO))
                .isInstanceOf(AlreadyAccountIdException.class);

        createMemberVO.setNickname(nickname);
        createMemberVO.setAccountId("");
        assertThatThrownBy(() -> memberService.insertMemberByMemberVO(createMemberVO))
                .isInstanceOf(AlreadyNicknameException.class);
    }

    @Test
    public void 멤버_팔로우_멤버() throws Exception{

        //given
        Member member = Member.buildMember().build();
        Long memberId = memberRepository.save(member).getId();
        Member followedM = Member.buildMember().build();
        Long followedMemberId = memberRepository.save(followedM).getId();

        em.flush();
        em.clear();

        //when
        System.out.println("서비스함수");
        memberService.insertFollowedMemberByMemberId(memberId, followedMemberId);

        System.out.println("멤버함수");
        Member newMember = memberRepository.getById(memberId);
        Member newFollowedMember = memberRepository.getById(followedMemberId);

        //then
        assertThat(newMember.getId()).isEqualTo(memberId);
        assertThat(newMember.getFollowedMembers().size()).isEqualTo(1);
        assertThat(newMember.getFollowedMembers().iterator().next().getMember().getId()).isEqualTo(followedMemberId);
        assertThat(newFollowedMember.getFollowingMembers().size()).isEqualTo(1);
        assertThat(newFollowedMember.getFollowScore()).isEqualTo(MEMBER_FOLLOW_COUNT_SCORES.get(0));
    }

    @Test
    public void 멤버_팔로우_멤버_예외처리() throws Exception{
        //given
        Member member = Member.buildMember().build();
        Long memberId = memberRepository.save(member).getId();
        Member followedMember = Member.buildMember().build();
        Long followedMemberId = memberRepository.save(followedMember).getId();

        em.flush();
        em.clear();

        //when
        System.out.println("서비스함수");
        Long aLong = memberService.insertFollowedMemberByMemberId(memberId, followedMemberId);

        //then
        assertThatThrownBy(() -> memberService.insertFollowedMemberByMemberId(memberId, followedMemberId))
                .isInstanceOf(AlreadyFollowedMemberException.class);
        assertThatThrownBy(() -> memberService.insertFollowedMemberByMemberId(-1L, followedMemberId))
                .isInstanceOf(NotExistMemberException.class);
        assertThatThrownBy(() -> memberService.insertFollowedMemberByMemberId(memberId, -1L))
                .isInstanceOf(NotExistMemberException.class);
    }

    @Test
    public void 멤버_블락_멤버() throws Exception{

        //given
        Member member = Member.buildMember().build();
        Long memberId = memberRepository.save(member).getId();
        Member blockedMember = Member.buildMember().build();
        Long blockedMemberId = memberRepository.save(blockedMember).getId();

        em.flush();
        em.clear();

        //when
        System.out.println("서비스함수");
        memberService.insertBlockedMemberByMemberId(memberId, blockedMemberId, BlockedMemberStatus.ALL);

        System.out.println("멤버함수");
        Member newMember = memberRepository.getById(memberId);
        Member newBlockedMember = memberRepository.getById(blockedMemberId);

        //then
        assertThat(newMember.getId()).isEqualTo(memberId);
        assertThat(newMember.getBlockedMembers().size()).isEqualTo(1);
        assertThat(newMember.getBlockedMembers().iterator().next().getMember().getId()).isEqualTo(blockedMemberId);
        assertThat(newBlockedMember.getBlockingMembers().size()).isEqualTo(1);
        assertThat(newBlockedMember.getBlockCount()).isEqualTo(1);
    }

    @Test
    public void 멤버_블락_멤버_예외처리() throws Exception{
        //given
        Member member = Member.buildMember().build();
        Long memberId = memberRepository.save(member).getId();
        Member blockedMember = Member.buildMember().build();
        Long blockedMemberId = memberRepository.save(blockedMember).getId();

        em.flush();
        em.clear();

        //when
        System.out.println("서비스함수");
        memberService.insertBlockedMemberByMemberId(memberId, blockedMemberId, BlockedMemberStatus.ALL);

        System.out.println("멤버함수");
        Member newMember = memberRepository.getById(memberId);

        //then
        assertThatThrownBy(() -> memberService.insertBlockedMemberByMemberId(memberId, blockedMemberId, BlockedMemberStatus.ALL))
                .isInstanceOf(AlreadyBlockedMemberException.class);
        assertThatThrownBy(() -> memberService.insertBlockedMemberByMemberId(-1L, blockedMemberId, BlockedMemberStatus.ALL))
                .isInstanceOf(NotExistMemberException.class);
        assertThatThrownBy(() -> memberService.insertBlockedMemberByMemberId(memberId, -1L, BlockedMemberStatus.ALL))
                .isInstanceOf(NotExistMemberException.class);
    }


}