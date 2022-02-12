package com.nameless.spin_off.service.comment;

import com.nameless.spin_off.dto.CommentDto.CreateCommentInCollectionVO;
import com.nameless.spin_off.entity.collections.Collection;
import com.nameless.spin_off.entity.comment.CommentInCollection;
import com.nameless.spin_off.entity.member.Member;
import com.nameless.spin_off.exception.collection.NotExistCollectionException;
import com.nameless.spin_off.exception.comment.NotExistCommentInCollectionException;
import com.nameless.spin_off.exception.member.NotExistMemberException;
import com.nameless.spin_off.repository.collections.CollectionRepository;
import com.nameless.spin_off.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class JpaCommentInCollectionService implements CommentInCollectionService {

    private final MemberRepository memberRepository;
    private final CollectionRepository collectionRepository;

    @Override
    @Transactional(readOnly = false)
    public CommentInCollection insertCommentInCollectionByCommentVO(CreateCommentInCollectionVO commentVO)
            throws NotExistMemberException, NotExistCollectionException, NotExistCommentInCollectionException {

        Member member = getMemberById(commentVO.getMemberId());
        Collection collection = getCollectionById(commentVO.getCollectionId());
        CommentInCollection parent = collection.getParentCommentById(commentVO.getParentId());

        CommentInCollection commentInCollection = CommentInCollection
                .createCommentInCollection(member, commentVO.getContent(), parent);
        collection.addCommentInCollection(commentInCollection);

        return commentInCollection;
    }

    private Member getMemberById(Long memberId) throws NotExistMemberException {
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        return optionalMember.orElseThrow(NotExistMemberException::new);
    }

    private Collection getCollectionById(Long collectionId) throws NotExistCollectionException {
        Optional<Collection> optionalCollection = collectionRepository.findOneByIdIncludeCommentInCollection(collectionId);

        return optionalCollection.orElseThrow(NotExistCollectionException::new);
    }
}
