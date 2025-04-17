import { UserPlus, MessageSquare, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export interface FriendProps {
  id: string;
  name: string;
  avatar?: string;
  username: string;
  mutualFriends?: number;
  isRequest?: boolean;
}

export const FriendCard = ({
  name,
  avatar,
  username,
  mutualFriends,
  isRequest = false,
}: FriendProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      <CardContent className="-mt-12 pt-0">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 border-4 border-background">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback><User className="h-12 w-12" /></AvatarFallback>
          </Avatar>
          <h3 className="mt-2 text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">@{username}</p>
          {mutualFriends && (
            <p className="text-xs text-muted-foreground mt-1">
              {mutualFriends} общих друзей
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        {isRequest ? (
          <>
            <Button size="sm" variant="default">Принять</Button>
            <Button size="sm" variant="outline">Отклонить</Button>
          </>
        ) : (
          <>
            <Button size="sm" variant="outline">
              <MessageSquare className="h-4 w-4 mr-1" />
              Написать
            </Button>
            <Button size="sm">
              <UserPlus className="h-4 w-4 mr-1" />
              Добавить
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default FriendCard;
