import { useParams } from "react-router-dom";
import PostForm from "@/components/forms/PostForm";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";

const EditPost = () => {
  const { id } = useParams()
  const { data: post, isPending } = useGetPostById(id || "");

  if(isPending) return <Loader />

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div>
          <img
            src="/assets/icons/add-post.svg"
            alt="add"
            width={36}
            height={36}
          />
          <h2 className="h3-bold md:h2-bold">Edit Post</h2>
        </div>

        <PostForm action="Update" post={post} />
      </div>
    </div>
  );
};

export default EditPost;
