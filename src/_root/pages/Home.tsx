import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import UserCard from "@/components/shared/UserCard";
import { useUserContext } from "@/context/AuthContext";
import {
  useGetRecentPosts,
  useGetUsers,
} from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import React from "react";

const Home = () => {
  const { user } = useUserContext();
  const { data: posts, isPending: isPostsLoading } = useGetRecentPosts();
  const { data: users, isFetching: areUsersLoading } = useGetUsers(10);

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostsLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard key={post.$id} post={post} />
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {areUsersLoading ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {users?.documents.map((creator) => (
              <React.Fragment key={creator.$id}>
                {user.id !== creator.$id ? (
                  <li>
                    <UserCard user={creator} />
                  </li>
                ) : null}
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
