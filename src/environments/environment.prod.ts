import { Environment } from 'src/app/shared/models/shared.models';

export const environment: Environment = {
  production: true,
  debugMode: false,
  commandQueryUrls: {
    register: 'https://missingdata.pythonanywhere.com/signup',
    login: 'https://missingdata.pythonanywhere.com/login',
    makeTweet: 'https://missingdata.pythonanywhere.com/tweet',
    getAllUsers: 'https://missingdata.pythonanywhere.com/users',
    getTweetsByUserId:
      'https://missingdata.pythonanywhere.com/users/user_id/tweets',
    getFollwingsByUserId:
      'https://missingdata.pythonanywhere.com/users/user_id/following',
    getFollowersByUserId:
      'https://missingdata.pythonanywhere.com/users/user_id/followers',
    getMyFollowers: 'https://missingdata.pythonanywhere.com/followers',
    getMyFollowings: 'https://missingdata.pythonanywhere.com/following',
    getMyTweets: 'https://missingdata.pythonanywhere.com/my-tweets',
    getMyTimeline: 'https://missingdata.pythonanywhere.com/timeline',
    followUser: 'https://missingdata.pythonanywhere.com/follow',
    unfollowUser: 'https://missingdata.pythonanywhere.com/unfollow',
    searchByUsername: 'https://missingdata.pythonanywhere.com/search',
  },
};
