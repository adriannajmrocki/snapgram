import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type Props = {
  user: Models.Document;
};

const UserCard = ({ user }: Props) => {
  return (
    <Link to={`/profile/${user.$id}`} className="user-card">
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="user"
        className="w-14 h-14 rounded-full"
      />
      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 line-clamp-1">{user.name}</p>
        <p className="small-regular text-light-3 line-clamp-1">
          @{user.username}
        </p>
      </div>
      <Button type="button" size="sm" className="shad-button_primary px-5">
        Follow
      </Button>
    </Link>
  );
};

export default UserCard;
