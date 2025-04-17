import MainLayout from "@/components/layout/MainLayout";
import { FriendCard, type FriendProps } from "@/components/friends/FriendCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Демо-данные для друзей
const friendsList: FriendProps[] = [
  {
    id: "1",
    name: "Анна Иванова",
    username: "anna_i",
    avatar: "/placeholder.svg",
    mutualFriends: 5
  },
  {
    id: "2",
    name: "Сергей Петров",
    username: "sergey_p",
    avatar: "/placeholder.svg",
    mutualFriends: 3
  },
  {
    id: "3",
    name: "Мария Сидорова",
    username: "maria_s",
    avatar: "/placeholder.svg",
    mutualFriends: 8
  }
];

const requests: FriendProps[] = [
  {
    id: "4",
    name: "Алексей Кузнецов",
    username: "alex_k",
    avatar: "/placeholder.svg",
    isRequest: true
  },
  {
    id: "5",
    name: "Ольга Смирнова",
    username: "olga_s",
    avatar: "/placeholder.svg",
    isRequest: true
  }
];

const suggestions: FriendProps[] = [
  {
    id: "6",
    name: "Дмитрий Николаев",
    username: "dmitriy_n",
    avatar: "/placeholder.svg",
    mutualFriends: 2
  },
  {
    id: "7",
    name: "Елена Соколова",
    username: "elena_s",
    avatar: "/placeholder.svg",
    mutualFriends: 4
  },
  {
    id: "8",
    name: "Игорь Морозов",
    username: "igor_m",
    avatar: "/placeholder.svg",
    mutualFriends: 1
  }
];

const Friends = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Друзья</h1>
        
        <Tabs defaultValue="friends" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="friends">Мои друзья</TabsTrigger>
            <TabsTrigger value="requests">Заявки ({requests.length})</TabsTrigger>
            <TabsTrigger value="suggestions">Возможные знакомства</TabsTrigger>
          </TabsList>
          
          <TabsContent value="friends">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {friendsList.map((friend) => (
                <FriendCard key={friend.id} {...friend} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="requests">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requests.map((friend) => (
                <FriendCard key={friend.id} {...friend} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="suggestions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestions.map((friend) => (
                <FriendCard key={friend.id} {...friend} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Friends;
