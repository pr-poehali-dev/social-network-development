import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CommentsList } from "./CommentsList";

export interface PostProps {
  id: string;
  author: {
    name: string;
    avatar?: string;
    username: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: CommentProps[];
  timestamp: string;
}

export interface CommentProps {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
}

export const PostCard = ({
  author,
  content,
  image,
  likes: initialLikes,
  comments,
  timestamp,
}: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-muted-foreground">@{author.username}</div>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            {timestamp}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-3">{content}</p>
        {image && (
          <div className="rounded-md overflow-hidden mt-3">
            <img 
              src={image || "/placeholder.svg"} 
              alt="Изображение к посту" 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 px-2"
            onClick={handleLike}
          >
            <Heart 
              className={`h-4 w-4 ${isLiked ? "fill-destructive text-destructive" : ""}`} 
            />
            <span>{likes}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 px-2"
            onClick={toggleComments}
          >
            <MessageCircle className="h-4 w-4" />
            <span>{comments.length}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      
      {showComments && comments.length > 0 && (
        <div className="px-4 pb-3">
          <CommentsList comments={comments} />
        </div>
      )}
    </Card>
  );
};

export default PostCard;
