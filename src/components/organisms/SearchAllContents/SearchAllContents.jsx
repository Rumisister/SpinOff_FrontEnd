import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';
import {
  LoadingState,
  SearchAllCollections,
  SearchResultHashTags,
} from '../../molecules';
import useIntersectionObserver from '../../../Hooks/useIntersectionObserver';
import { axios } from '../../../api';
import SearchAllMasonry from '../SearchAllMasonry/SearchAllMasonry';

const dummyTags = [
  {
    content: '레이첼 맥아담스',
    id: 0,
  },
  {
    content: '로맨스',
    id: 1,
  },
  {
    content: '라이언 고슬링',
    id: 2,
  },
  {
    content: '포스터',
    id: 3,
  },
  {
    content: '결혼식',
    id: 4,
  },
  {
    content: '힐링 영화',
    id: 5,
  },
];
const dummies = [
  {
    type: 'movie',
    genreOfMovieStatuses: ['공포'],
    imageUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
    movieId: 0,
    title: '주온',
  },
  {
    type: 'movie',
    genreOfMovieStatuses: ['스릴러'],
    imageUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
    movieId: 1,
    title: '끝까지 간다',
  },
  {
    type: 'movie',
    genreOfMovieStatuses: ['액션'],
    imageUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
    movieId: 2,
    title: '엣지 오브 투모로우',
  },
  {
    type: 'curator',
    content: [
      {
        accountId: 'gudehd123',
        id: 0,
        nickname: '폴인럽1',
        profileImg: 'https://img.hankyung.com/photo/202012/BF.24610667.1.jpg',
      },
      {
        accountId: 'gudehd1234',
        id: 1,
        nickname: '폴인럽2',
        profileImg: 'https://img.hankyung.com/photo/202012/BF.24610667.1.jpg',
      },
      {
        accountId: 'gudehd12345',
        id: 2,
        nickname: 'string',
        profileImg: 'https://img.hankyung.com/photo/202012/BF.24610667.1.jpg',
      },
    ],
  },
  {
    type: 'post',
    memberId: 0,
    memberNickname: '퉁그리',
    memberProfileImgUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
    postId: 123,
    postTitle: '스프링부트와 aws로 혼자 구현하는 웹 서비스',
    thumbnailUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
  },
  {
    type: 'post',
    memberId: 1,
    memberNickname: '퉁그리',
    memberProfileImgUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
    postId: 123,
    postTitle: '스프링부트와 aws로 혼자 구현하는 웹 서비스',
    thumbnailUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
  },
  {
    type: 'post',
    memberId: 2,
    memberNickname: '퉁그리',
    memberProfileImgUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
    postId: 123,
    postTitle: '스프링부트와 aws로 혼자 구현하는 웹 서비스',
    thumbnailUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
  },
  {
    type: 'post',
    memberId: 3,
    memberNickname: '퉁그리',
    memberProfileImgUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
    postId: 123,
    postTitle: '스프링부트와 aws로 혼자 구현하는 웹 서비스',
    thumbnailUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
  },
];
const dummyCollection = [
  {
    type: 'collection',
    collectionId: 0,
    collectionTitle: '감성 영화 모음',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberAccountId: 'gudehd231',
    memberNickName: '폴인럽',
    memberId: 0,
    thumbnailUrl: 'https://img.hankyung.com/photo/202012/BF.24610667.1.jpg',
  },
  {
    type: 'collection',
    collectionId: 1,
    collectionTitle: '감성 영화 모음',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberAccountId: 'gudehd231',
    memberNickName: '폴인럽',
    memberId: 1,
    thumbnailUrl: 'https://img.hankyung.com/photo/202012/BF.24610667.1.jpg',
  },
  {
    type: 'collection',
    collectionId: 2,
    collectionTitle: '감성 영화 모음',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberAccountId: 'gudehd231',
    memberNickName: '폴인럽',
    memberId: 2,
    thumbnailUrl: 'https://img.hankyung.com/photo/202012/BF.24610667.1.jpg',
  },
  {
    type: 'collection',
    collectionId: 3,
    collectionTitle: '감성 영화 모음',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberAccountId: 'gudehd231',
    memberNickName: '폴인럽',
    memberId: 0,
    thumbnailUrl: 'https://img.hankyung.com/photo/202012/BF.24610667.1.jpg',
  },
  {
    type: 'collection',
    collectionId: 4,
    collectionTitle: '감성 영화 모음',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberAccountId: 'gudehd231',
    memberNickName: '폴인럽',
    memberId: 0,
    thumbnailUrl:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFBgVFBUYGRgaGBgYGBgYGBgYGRgYGBkZHBoYHBgcIS4lHB4rHxkYJzgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhIRGTEkISE0NDQ0NDQ0NDQ0NDQ0NDQxNDQ2NDQ0MTY0NDQ0NDQ0MTExNDExNDQ0NDE0MTFANDQxNP/AABEIAQ0AuwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAABAwIDBQUGAwgBBQEAAAABAAIRAyEEEjEFIkFRYQZxgZGhEzKxwdHwB3LhQlJigpKisvEUFSM0wtIk/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAjEQEBAAICAgEEAwAAAAAAAAAAAQIRITEDQRIiMlFhBHGB/9oADAMBAAIRAxEAPwDyRCEIDSo4XCFrS/Eua4gS0Ydzg0mJGbOJiTcC8KpimU2uim8vbA3iwsveRlJPS/VQIQAhCVMBCRCAChEK1hcG55hrSfT14D7ASCrCWF0uH2OwCHXPJo+f34JztjsFw0dQTM+shT8orVc04XjkmkLZfsc2yG5kEHh9U7/ohIAL2t6X9YBlVuFqsIpJWnX2PUaJBDvy3+MLOcwixRvZWGoSQhBFlLKahAPlCYllAPQmgpZTMSiU0pFJHSiU1Epg4FOUcpQUA5CSVobJwBqvA0aDcpGfsrZxqGTZoMTzPIc/kugrObTbDRHfxPzVkNawAMA0ADeDRwnpx6noFVeWMlz953E8vE6D16BReWkmlVmJ/ac4jlE6936qi/EPe85TJ04/NJVqOeTliOQE+pWtsbBDUi/Pl1B5p8Quao06lSm+Hu01i3hKvYmtDZImRIJkfQqtjQWvIc0ETqZv1kFS5aZZG9PeI8CD/tAksPwOLk3HeQNBpcKXa+yGPEtLQ7gRYHvH33Kts1ga+5H6G1/P1VjGVyxxb/pzfkiTQy5rka9FzHFrhBHAqJbuJYHiD4HkeUrGq0y0wVW02aRISpEJKhIhMBCJQkAUJUiAEiVIgFQhATCWhTL3Bo1K7LZ+H9kwNaL+8ep/ZHnB/wBLC2JRGaYnUnuA4d+i321bydR4S5wufAQI71NVOBjq3s2QTL9T3/fksLDYGtiXhrZPICYCnxzi93f8OfmvUexWw2U6TXlu84A31AOnileGmM32yNj9hGNaC8ku5aAd5Gq6jCdnqbBa3QAAfVbpppQFOlyz05nanZmlUbBbfwXE7W7MVKV2SW6/ovW/ZyqmNwjXCCJSsvpW5eK8gYwNFxcDTj3iePT7OLicUcxDr6QfhH0XX9rNnGmSQOZB6clweIF7q8btlnjqrQqDXzHzVXHMm6ja+CpXHM0hCO2bKVI4XQqQVCRCYLCIQClzIBqEIQCISoSATmjhz+CapaLJI6mPr6fFMN7AQ1k/vOj+Rkepv5qx7YwCTe7iO8mB8T5LPqOhjR0+JUT8ReOtvQfAKauR0uw9ne1rsa68kF35YLiPGI8QvYMI2AAvNPw/ZmqvfwaAJ8vkvScPiqYMZh5hTO2tnDRrEQFBmSPxDToQU0OVUsZwkY4Sm4pwiyb7QDVMxFanGo80vQvbC21gG1WFp5WPI815BtzBupvLXCCDC9rrOBFiD3LjO2uyva0i9g32An8zeI+amcVWXMeXm6Kb4KZmTXOWjEYhsOUalrGQCoQiJpUQhEpkIQhCAEJEIBUJEqAArVLde0fui/eRveWngoKZ+vlw84UmGu8Tzv4oOL+LdEDkG/CFVBlysYoy4lVmN+/vvULj0b8P9ll9Fz3PLWued0ReI4rrsT2WpvFqr2nhBb9Fh7LoYmhgaTaNPM9zZucoaXnNJ81kbTwG2QWPDi8uy52sLWNbvXEuG8CAN4ybqZy1vEdJT2RVoO3ajnCf2l0WGecu9qub7PMx5Ap4lsnKHB4iAZIcwwdRY2tBtpC7KhhxlTnYt1HN7UFR7srHEKvg+zNTV1d/dAPxWpimPbme1pMSYAk2EwANSYXDbaq7beWuawhrpJY3JnZDiA05pAkQZAOtyiTk7dR11fY7mndqOB8CPkkfQcGQ+CdLcfBc3szEbUploxDC8EDNGWWnllBjyjuK66nLm3ETwKV7Hrbw3tNgPY4h7RYEkjp0WX7Tmuz/ABDoxX7wD6LjXMVzphl2GXBCQIo6oTSEIQmQQiEIAQhCAEJEBIHKfCi6rq9h2gAc4k9Cf0j1RTiTEG/h9/FW9j4IVcRSpcHvbP5Wkl39rSqeKNx98At7sHBx9OeDHuHflI+BKmtce3t9HChwA0sq1bYNNxl7nnoHQPRXcJWAhOqVkaivql4Mw+EpsByjhqZJ8ypGHdKrnEiDeyP+UzJqnwNUyhBcQeKZX2PTfeXg/wALyFXbWjeaRbnxV7DYoPbOnMcjyS4p2WcxDS2SGaPe4fxEH4AKOqwAFaFatuwsvEPRRN3t5d+JLP8AuMdzb8CuGkHVd12+cXVGjWxXD4ykWuuzJNw29gdNTMd6eNZZT2r09U5+qKQunVhdNBiEITIIhCEAiEISAQEJUArTx8laoCw6n5qmVoYdu8wdR9UqrFJjG7wHGWjzAWj2Oq5cfRm0l7D/ADMcAPOFm7Ubc+Cr0MU5lRlUXc17XjqWum/iERW9V75TxTmqFm0/aPyMk/vEaCE3AYllVrHtMse0OHc4Sl2jhazBnwzQ4gHcLsjXEkcQNdfNQ22Nt7JNemWCo+mT+0w+hAi3iFijYeMY0UWVXvaGw57i0OE6ASCTHWVLs7a+064ltGmyHlha4wQROtjItqOavHE7Whs0Wy4kSHMhsTc8hZFv6rTHCTvKf6zdk9lq1Gpmdiqj2HVjsxJ8XOMeS2cRW9iQ4Tl0dxtz7ws+s/apN2UrOy+9eInNpp69FiU9uY6rUfR/44IYQHuzQ1sieOpvoEb/AEnKfiy/064bWY8SxwI6FRurkrJwGzWtcX+6SBmA0zCZMeXkreNxTadNz3GwBKE2qLcLSe99aoRDSQAbkQBfvuV5p2ofTfiHml7loMgzYHUE8414KTB4+vUrVAXOax5e5zcxaAYsJHGIEaHQ6yqDA5+84yTck9AAB4AD0VTHTLLLc1ELGXAUWJEFXWs3gqmK94hOJsQJUiAmgqEIQCIQhACEFCDAFwtvAmarAQDEX427tfFZGGbLgtjZV6hP3qEqqE2mBLu8fBZbmrSxWiquYMk8Wug9x09ZRDrtfw92xuHDuN2y9n5Sd5vgTPc7ovTNn4iRBXz7TqPp1M7DDmOLh0g3npwPQr13slt+niKYcLOEB7eLXfMcilZ7PG+nQY+iQc7NeMWPeDzVD/rbmGC54jm1p+V10VBoeFFU2cwlTcb3Lp1ePzyT45Yy6/LnKuNqVTuF56mGiee7ry4K7h8MGMy8fJarsC0CypYpzWg3Sk13U5+X5TUkk/TMruy2XIdp8aX03x7oc1veZk+jT5rU2ttHM72bLuPp1WB2nZkp02A6lzz1IET/AHeqc7Y5dObwby2oSP3GC5EHNVpAxJEG+oIIIBBESLeBw3/ZzdWtFuYJ+SiwdB73VMoJIY0wNYFejpcFaeAeCxzAd0Fg43Ia8z3wYV2s5OWa6hv6cFkbQYQ8rsa2FGbONC0R1OUmPOFgdocNZjxo4X8bj5pY3k8pwxJnXXmkhCVt7eX0VMyISkJEAqESiUwRCESkFrAt3ieQWnshm8T1HxP6LOwA97uWvsrdaT1PoFOS8Vf2Zc0DjHrH6JmzqWcuZ++0gfmEHzVhnuiNYnyj5iUZsj2vA/aa8AcYuY8ZCDR4jDjI2oBvMOWoOgME+R04WTdn16mGqirSdumzuV+DgOGhBWniAwPcWwWVGte0HiHAQCD4A9WrEqMLDDeEiNQ5syJ5olFj1bZXawZA98tB4nSeU81ps7YUD+2Fw3Y3HMdmpvAgiS03EaP8jDv53ckm39hOpy+gZZqWalvdzCW2kdpi+1tODv8Aldcrje0FXEOyUgfoOZ5Lm9n4WrXeGNP5idGjmfou+2ZsynSYGMHVxOrjzKmq4V9j7MyDM67jck8Vzna6tnq5RowBvj7zvUj+lehOa1rS51gBJ6AXPovLK7nPeXHV5n+ok/NPHtGXSoxmUtfoZA11bYuB6QOPPin4KtAcZ1yT35XAn4qbGOAOWBDWPJkgTuP5nW8xc2WZhX2Hd8B+qq8ox4dIcQ04cDiXtd3AZPq5VzS9rh6jNXt32d7bkR3Zh5Kj7TcA+9VNgsTkeCPynx/VSrtzNRsHomq9tSlleYEA3VFaMknvCeI16jn4fPomIBQmSHMjMmpUGWUApErdUBr7Cp53vb/A4+UfVdBgMIXMI5h8d4YXBYvZ1sOeRxa4T0gmPQLr9kNBYB+fwmm7/wCQoyq8Zw5yswscJ8PGU15D2CBxJbPB1w5s8jFuo6rbx+Hu0xNmnul0fMrnm0nBz2lpjetpcHggLGHqF9ItABeySGkEyCd5o66kDwUctqAHjxPw8VUo1Sx5Mw4H16n5rUx9CCK1I2ddzf4jdwgW6/dw4j2e91Cqx/FpBIv1Bt1E+a9GFJtRgLTuuGk6Lic/ukjO17c0EctRMWPktrY2OI3GiOhIEeii1cjfw+y6dMbojidLnmYCv4ekFWo0Xm5d4CfUkkrSoU7JHWL2sxOTDPA1fDB/Mb/2hy89Y+5dy+Og9YXV9vax3G8BmefGzf8A2XHNduO6lnnmzfIKomxG+r75/ea5nD9rv+V/VUKJiW+Xw+SsYhxy/wA3wA+ZPkqUmZnQD0VxF7XQ+GCeZnuUdKoSTdRVHmPJMpvhwRotre1QHNDpvAPS1iOmiw8y6AUs7CBwJ/uH6LBr0nNcWuEQiFTcyXOmJFRFQnsYXGACe5aOHwDRd1z+79UDahQw73mGtJ+A8VoUNkOPvHwFyrzaoaIAA6ABTUnuguNmjzPci8CcoazG0QAJmRN5McdOOq3ez+NGcNPF7f79w/5LlMY8ub4nyVzZhc1zI1ifmPUBRZwvG+nY4ls05OoY7xLIM9PeVGtQGdnGXvHfmJAU52hTeyRYXkAzGYEnvvHkm4zdbRfxD6RMdwJE98qZVWacntXDlmIe3gbjldgKNmV3XYZjkL+i1tv4MGszW7HA97CRPwVnsZRpOe3NZ++HTofdiPCVXpMn1LOymCCyRM5m9eYnhz8PFaWG2cQ6RqdPotLB9n8znPphrgfeY4brp5GN0q+zZwp60XtHJozAHm3KdO+PBZtYMBUI3Xarcayyz8LSzmCwt5OdYu8NfNadOi5gvcJwVw/aahnqHlJaO4AfMlcpi8KAx2XRrgT0s4A+cLuNsYlpc0lvB/nmE/AriMQ4w4zEH10Hr8Uhrhk4mjGUZv3if6reihNDK6Oh9I+qmrPM90JHmwnW/kY+i0jKqdUqNrb+qleFJRy8dQVRLdCplbHHWFZFNj2wRPhp5LMFQF56wB4AfRWQ4Nn49bfIpBBitjEGWG3I2P0WecA/p/UFtCpGhnqPhH34p2dUlk7NsHHwVsOVfDMhpHVS0yqTU9NkmTp92RiMRm3f2QUx1TgOAVRr97LwA9VPs50fUddT4GpleD1B+/VVnhTUzABiVNXGk/dngeh4fceSdXxx9kGE3YZHdmBn4qDEmdeQuq7qVnA6wf8ASiRpXWbVAfUZFyc8fwzTJv35Xn+VZrMFUphjw0g5yZ4QIbw8U7ZW0Wua3NOcSJJ1JDmzfo9/ouqxGFGWf2Q4Ejk1xnN3XW3hx+W0ZXXLtdhMaxuTjqDrmbznpx8OYWvUpBwXKe0yNDCXS3SPekaObaD+pC16W22Bu8HE8YHyutMvBlL9M4KZz3eUj8IR8j+qUV4ac0KB+2iRusI6lU3VHPO8SfgjH+NffAvlnpznanEMLaha0bpDBA1cTJ++i4DFYppJjQmfsLsu0D2ljQTEuc9/IxMNHMyZ8V53tBhB3SbjNEzEkx6R5rPyYyWaOZXRHuzGxRUA8uvyVLfnqr2GowJPeSeI53UaLe0D5jvT8Jo88o9f9Ja17gaaIpHK2Cbuv3SLeP6Jg1jJv3K3izDes/JQ0RB06jl4JuJfLr8kvZeitfbRPz9yrh1oTlWkpnCFHTPzSuddMBuVQBKq0TLyrLuKhw4tPNyQWWawrDDlaQRqqpVkPaRB1+uoU5RWNPqEOHUCCO5I2oLSbhV3SB0H35qvnJ4qdL+TZwdJs7hseHXoV2LtoH2GZo3msAd0czQwdWkTK4HZzXOeGgmTYRBknhrovQRsOplG8Q7LBk8eQjgtfDMpbcZssrLOXRYbaFOsA6m7VoJaTBZzE6eauMpiNPIt+MrjezDGCsaVadd0Ew1zh0Gp5eK7d+Ba7S3dZduGVs5mmGUkvCOoQBo0fmeP/WVj7cx7WM9+7rNA3RB1njEdVtOwNNo3zMeK4jta2mXDXMbNaOA0TyvHB49sXaNepWfutdlG6OIA04DRYVd7Q8jUzERe1vDRehYGj7Cg+q4XbTc4A9By8F5g9haZmTxOt+N+a4/Jhq81pMkj5zdfWU8NgSePz+KhbVA0bJ5nTwH1TXvLpLjJ+9BwWei2cawmQPDh3n6KMuvOp1vxPVPZSkdfilcwAEp6Gy4V5LiSdOPJMe8EkqPDmx6qIOukExKM6aSosyZLjjdITcJ7hIUJNu5MHvNimtbDB4IqGWp7xupA9Mc1PBSFMIg5wNj5pxpgi4Sp4S0NrPZ7Z1erXAoCXsGf+khetNxYfTE7r4hzD7zXDUH6rlfwopzWqu5MI9WL0L/jsLrgXMHquvwY6x3+U5VwbaVapisoFgc2b6nmu4o0KoFn+clK/Z7GEuYInXirDH2C20m1n4jA1nA56sDk0aLnaXZlzq4OcEAzJknouzxLt3vSYJgALj9gI1xyNuP7cvFHCOYDd72MB4kDed6NIXmD12/4lYqX0ac6NfUcOr3Q0/2v81w7iuTzXeS4YGpwYgJwWRnKvi3Q2OasKliXSUUHYcWUDuKsUhA8FXqJA6obBNhK34BSexKQTiQmPHEeKlahzVQVweHVTu0VdvvQrKQIw2SlNYbJyYIlQhAeh/hOy1Z3h/j9F3zTvDvXE/hWyKNR3Ny7Rh3gu3x/bGd7Wa4VFxV+sDEhZ7GmVcJJVNgpHuikOsDzUGINw1JtXENpszu91jHPPc0T8AgPJO2OK9pjKpBkMIpt/kAa4f15/NYJT6j3OJc67nEucerjJPmSo1wZXd21KE4JAhIB7oCrZCdU/EHQJxSBjiq1TVWHqu9Kg+jEq3mVGnzVhOBM0pySEhTCqTvq0FVEByshIG01IomaqRMBKkQgPTvwyth3HmXHycR8l2WHuVxf4dOjCjqX/wCbl2uF0ld2H2xne1uVC8AHwlKXqFhzPcDpDR6T80wbhKZe7OdOC5n8QMbkw7wDd7m0x3TLv7WuHiuyJDQYtAXlP4jYuX0qU6Nc9w6uOVvo13mp8l1jaJ24xxSQhC4mhUIlMqvgICHNLk8hMpBSpBG9VnlT1CqztUqDmFW7KmBCk9o5AWy5ImQgKghcIeFYaVWr+8FM1IFBupVCdVKgFlIkQmHpXYB3/wCVv53/AOZXcUTZcH2D/wDEb+d/+RXd09PBd2H2xneznPTM0PJ5gH5fJMm6XE6juIVksYupDHHw8zC8S7VYr2mLquBs12QdzBlP9wcfFev46sRSJ5fIH6LwlzybkyTcnmTclc3nupIrEIlNQSudZ0qCq66keVAkEtPRBKRIUBG8qJlynPUI1SCwGJ0IaZT8qA//2Q==',
  },
  {
    type: 'collection',
    collectionId: 5,
    collectionTitle: '감성 영화 모음',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberAccountId: 'gudehd231',
    memberNickName: '폴인럽',
    memberId: 0,
    thumbnailUrl: 'https://img.hankyung.com/photo/201907/BF.20032093.1.jpg',
  },
  {
    type: 'collection',
    collectionId: 6,
    collectionTitle: '감성 영화 모음',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberAccountId: 'gudehd231',
    memberNickName: '폴인럽',
    memberId: 0,
    thumbnailUrl:
      'https://photo.jtbc.joins.com/news/jam_photo/202110/07/b1d52596-068e-4e78-8f71-616798f88d57.jpg',
  },
  {
    type: 'collection',
    collectionId: 20,
    collectionTitle: '감성 영화 모음',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberAccountId: 'gudehd231',
    memberNickName: '폴인럽',
    memberId: 0,
    thumbnailUrl: 'https://img.hankyung.com/photo/202012/BF.24610667.1.jpg',
  },
];
const SearchAllContents = forwardRef(({ keyword }, ref) => {
  const { rootRef, targetRef } = ref.current;
  const [contents, setContents] = useState([]);
  const [collections, setCollections] = useState([]);
  console.log(contents);
  const [hashtags, setHashTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isLoadingRefCheck = useRef(null);
  const pageNum = useRef({
    collectionPageNum: 0,
    curatorPageNum: 0,
    moviePageNum: 0,
    postPageNum: 0,
  });
  const serverPageNum = useRef({
    collectionPageNum: 0,
    curatorPageNum: 0,
    moviePageNum: 0,
    postPageNum: 0,
  });
  const pageSize = useRef({
    collectionPageSize: 8,
    curatorPageSize: 0,
    moviePageSize: 0,
    postPageSize: 6,
  });
  const componentMounted = useRef(true);
  const requestAllMore = useCallback(async () => {
    try {
      setIsLoading(true);
      isLoadingRefCheck.current = true;
      const res = await axios({
        method: 'get',
        url: `/api/search/all/${keyword}`,
        data: null,
        params: {
          collection_page: pageNum.current.collectionPageNum,
          collection_size: pageSize.current.collectionPageSize,
          member_page: pageNum.current.curatorPageNum,
          member_size: pageSize.current.curatorPageSize,
          movie_page: pageNum.current.moviePageNum,
          movie_size: pageSize.current.moviePageSize,
          post_page: pageNum.current.postPageNum,
          post_size: pageSize.current.postPageSize,
        },
      });
      if (componentMounted.current) {
        if (res.data.data.data.members.content.length) {
          setContents(prev => [
            ...prev,
            {
              type: 'curator',
              content: [...res.data.data.data.members.content],
            },
          ]);
        }
        res.data.data.data.movies.content.forEach(movie => {
          setContents(prev => [...prev, { ...movie, type: 'movie' }]);
        });
        res.data.data.data.posts.content.forEach(post => {
          setContents(prev => [...prev, { ...post, type: 'post' }]);
        });
        if (!res.data.data.data.movies.last) pageNum.current.moviePageNum++;
        serverPageNum.current.moviePageNum = res.data.data.data.movies.number;
        if (!res.data.data.data.members.last) pageNum.current.curatorPageNum++;
        serverPageNum.current.curatorPageNum =
          res.data.data.data.members.number;
        if (!res.data.data.data.posts.last) pageNum.current.postPageNum++;
        serverPageNum.current.postPageNum = res.data.data.data.posts.number;
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (componentMounted.current) setIsLoading(false);
      isLoadingRefCheck.current = false;
    }
  }, []);

  const requestAll = useCallback(async () => {
    try {
      setIsLoading(true);
      isLoadingRefCheck.current = true;
      const res = await axios({
        method: 'get',
        url: `/api/search/all/${keyword}/first`,
        data: null,
        params: {
          collection_page: pageNum.current.collectionPageNum,
          collection_size: pageSize.current.collectionPageSize,
          member_page: pageNum.current.curatorPageNum,
          member_size: pageSize.current.curatorPageSize,
          movie_page: pageNum.current.moviePageNum,
          movie_size: pageSize.current.moviePageSize,
          post_page: pageNum.current.postPageNum,
          post_size: pageSize.current.postPageSize,
          length: 10,
        },
      });
      if (componentMounted.current) {
        console.log(res.data);
        console.log('최초호출!!!!!!!');
        setCollections(prev => [
          ...prev,
          ...res.data.data.data.collections.content,
        ]);
        if (res.data.data.data.members.content.length) {
          setContents(prev => [
            ...prev,
            {
              type: 'curator',
              content: [...res.data.data.data.members.content],
            },
          ]);
        }
        res.data.data.data.movies.content.forEach(movie => {
          setContents(prev => [...prev, { ...movie, type: 'movie' }]);
        });
        res.data.data.data.posts.content.forEach(post => {
          setContents(prev => [...prev, { ...post, type: 'post' }]);
        });
        setHashTags(prev => [...prev, ...res.data.data.hashtags]);
        if (!res.data.data.data.collections.last)
          pageNum.current.collectionPageNum++;
        serverPageNum.current.collectionPageNum =
          res.data.data.data.collections.number;
        if (!res.data.data.data.movies.last) pageNum.current.moviePageNum++;
        serverPageNum.current.moviePageNum = res.data.data.data.movies.number;
        if (!res.data.data.data.members.last) pageNum.current.curatorPageNum++;
        serverPageNum.current.curatorPageNum =
          res.data.data.data.members.number;
        if (!res.data.data.data.posts.last) pageNum.current.postPageNum++;
        serverPageNum.current.postPageNum = res.data.data.data.posts.number;
      }
    } catch (error) {
      console.log('에러 발생@#@#@#');
      console.log(error);
    } finally {
      if (componentMounted.current) setIsLoading(false);
      isLoadingRefCheck.current = false;
    }
  }, []);
  useIntersectionObserver({
    root: rootRef.current,
    target: targetRef.current,
    onIntersect: useCallback(([{ isIntersecting }]) => {
      console.log('옵저버 isloading');
      //console.log(refLoading.current);
      console.log('옵저버 intersection');
      console.log(isIntersecting);
      if (
        (isIntersecting &&
          !isLoadingRefCheck.current &&
          pageNum.current.collectionPageNum >
            serverPageNum.current.collectionPageNum) ||
        pageNum.current.curatorPageNum > serverPageNum.current.curatorPageNum ||
        pageNum.current.moviePageNum > serverPageNum.current.moviePageNum ||
        pageNum.current.postPageNum > serverPageNum.current.postPageNum
      ) {
        console.log('옵저버에서 리퀘스트');
        requestAllMore();
      }
    }, []),
  });
  useEffect(() => {
    componentMounted.current = true;
    console.log('마운트 후 !!!');
    requestAll();
    console.log('최초호출!!!!!!!');
    return () => {
      componentMounted.current = false;
    };
  }, []);
  console.log(hashtags);
  console.log(collections);
  console.log(SearchAllMasonry);
  console.log(dummies);
  return (
    <Container>
      <LoadingState show={isLoading} />
      <SearchResultHashTags contents={dummyTags} />
      <SearchAllCollections contents={dummyCollection} />
      <SearchAllMasonry contents={dummies} />
    </Container>
  );
});

SearchAllContents.displayName = 'SearchAllContents';
SearchAllContents.propTypes = {
  keyword: propTypes.string,
};

export default SearchAllContents;
