import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Saved = () => {
  const { data: currentUser, isFetching: isCurrentUserLoading } =
    useGetCurrentUser();

  const savedPosts = currentUser?.save
    .map((item: Models.Document) => ({
      ...item.post,
      creator: { imageUrl: currentUser.imageUrl },
    }))
    .reverse();

  return (
    <div className="saved-container">
      <h2 className="h3-bold md:h2-bold text-left w-full">Saved Posts</h2>
      {isCurrentUserLoading ? (
        <Loader />
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {savedPosts.length === 0 ? (
            <p className="text-light-4">No available posts</p>
          ) : (
            <GridPostList
              posts={savedPosts}
              showUser={false}
              showStats={false}
            />
          )}
        </ul>
      )}
    </div>
  );
};

export default Saved;
