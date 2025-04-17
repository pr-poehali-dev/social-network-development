import { useState } from "react";
import { Image as ImageIcon, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface CreatePostFormProps {
  onSubmit?: (post: { content: string; image?: string }) => void;
}

export const CreatePostForm = ({ onSubmit }: CreatePostFormProps) => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    
    // Имитация отправки данных
    setTimeout(() => {
      onSubmit?.({ content });
      setContent("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Ваш профиль" />
            <AvatarFallback>ВЫ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="Что у вас нового?"
              className="resize-none border-none focus-visible:ring-0 p-0 shadow-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">
          <ImageIcon className="h-4 w-4 mr-2" />
          Фото
        </Button>
        <Button 
          onClick={handleSubmit} 
          disabled={!content.trim() || isSubmitting}
        >
          <Send className="h-4 w-4 mr-2" />
          Опубликовать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreatePostForm;
