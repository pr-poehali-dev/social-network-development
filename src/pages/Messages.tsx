import { useState } from "react";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import MainLayout from "@/components/layout/MainLayout";

interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  timestamp: string;
}

interface Conversation {
  id: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
    isOnline: boolean;
  };
  lastMessage: string;
  unreadCount: number;
  messages: Message[];
}

// Демо-данные для чатов
const conversationsData: Conversation[] = [
  {
    id: "1",
    user: {
      id: "u1",
      name: "Анна Иванова",
      avatar: "/placeholder.svg",
      isOnline: true,
    },
    lastMessage: "Привет! Как дела?",
    unreadCount: 2,
    messages: [
      {
        id: "m1",
        text: "Привет! Как дела?",
        sender: "other",
        timestamp: "10:30"
      },
      {
        id: "m2",
        text: "Привет! Все хорошо, спасибо. А у тебя?",
        sender: "me",
        timestamp: "10:32"
      },
      {
        id: "m3",
        text: "Тоже неплохо. Что планируешь на выходные?",
        sender: "other",
        timestamp: "10:34"
      }
    ]
  },
  {
    id: "2",
    user: {
      id: "u2",
      name: "Сергей Петров",
      avatar: "/placeholder.svg",
      isOnline: false,
    },
    lastMessage: "Встретимся завтра в 18:00?",
    unreadCount: 0,
    messages: [
      {
        id: "m4",
        text: "Привет, ты свободен завтра?",
        sender: "other",
        timestamp: "09:15"
      },
      {
        id: "m5",
        text: "Да, после работы свободен",
        sender: "me",
        timestamp: "09:20"
      },
      {
        id: "m6",
        text: "Встретимся завтра в 18:00?",
        sender: "other",
        timestamp: "09:22"
      }
    ]
  },
  {
    id: "3",
    user: {
      id: "u3",
      name: "Мария Сидорова",
      avatar: "/placeholder.svg",
      isOnline: true,
    },
    lastMessage: "Спасибо за помощь!",
    unreadCount: 1,
    messages: [
      {
        id: "m7",
        text: "Можешь помочь с этим заданием?",
        sender: "other",
        timestamp: "Вчера"
      },
      {
        id: "m8",
        text: "Конечно, что именно непонятно?",
        sender: "me",
        timestamp: "Вчера"
      },
      {
        id: "m9",
        text: "Спасибо за помощь!",
        sender: "other",
        timestamp: "8:45"
      }
    ]
  }
];

const Messages = () => {
  const [conversations] = useState<Conversation[]>(conversationsData);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;
    
    // Здесь был бы API-запрос в реальном приложении
    
    setNewMessage("");
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Сообщения</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
          {/* Список чатов */}
          <div className="md:col-span-1 border rounded-lg overflow-hidden">
            <div className="p-3 border-b font-medium">Все сообщения</div>
            <ScrollArea className="h-[calc(100%-3rem)]">
              {conversations.map((conversation) => (
                <div 
                  key={conversation.id}
                  className={`flex items-center gap-3 p-3 hover:bg-muted cursor-pointer ${
                    selectedConversation?.id === conversation.id ? "bg-muted" : ""
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conversation.user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{conversation.user.name[0]}</AvatarFallback>
                    </Avatar>
                    {conversation.user.isOnline && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div className="font-medium truncate">{conversation.user.name}</div>
                      {conversation.unreadCount > 0 && (
                        <div className="ml-2 h-5 w-5 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground">
                          {conversation.unreadCount}
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
          
          {/* Область сообщений */}
          <div className="md:col-span-2 border rounded-lg overflow-hidden flex flex-col">
            {selectedConversation ? (
              <>
                <div className="p-3 border-b flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={selectedConversation.user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{selectedConversation.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{selectedConversation.user.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {selectedConversation.user.isOnline ? "В сети" : "Не в сети"}
                    </div>
                  </div>
                </div>
                
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {selectedConversation.messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.sender === "me" 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted"
                          }`}
                        >
                          <div>{message.text}</div>
                          <div className={`text-xs ${message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"} text-right mt-1`}>
                            {message.timestamp}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                <div className="p-3 border-t">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Напишите сообщение..." 
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Выберите чат, чтобы начать общение
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;
