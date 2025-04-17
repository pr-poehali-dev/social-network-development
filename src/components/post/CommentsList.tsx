import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type CommentProps } from "./PostCard";

interface CommentsListProps {
  comments: CommentProps[];
}

export const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <div className="space-y-4 mt-2">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
            <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="bg-muted rounded-lg p-3">
              <div className="font-medium">{comment.author.name}</div>
              <p className="text-sm">{comment.content}</p>
            </div>
            <div className="text-xs text-muted-foreground mt-1">{comment.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
