import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { CreatePostForm } from "@/components/post/CreatePostForm";
import { PostCard, type PostProps } from "@/components/post/PostCard";
import { Badge } from "@/components/ui/badge";

// Демо-данные для постов
const initialPosts: PostProps[] = [
  {
    id: "1",
    author: {
      name: "Иван Петров",
      username: "ivan_petrov",
      avatar: "/placeholder.svg"
    },
    content: "Сегодня отличный день для новых открытий! Всем хорошего настроения 😊",
    likes: 24,
    comments: [
      {
        id: "c1",
        author: {
          name: "Мария Сидорова",
          avatar: "/placeholder.svg"
        },
        content: "Полностью согласна! Удачного дня!",
        timestamp: "20 минут назад"
      },
      {
        id: "c2",
        author: {
          name: "Алексей Иванов",
          avatar: "/placeholder.svg"
        },
        content: "И тебе хорошего дня!",
        timestamp: "15 минут назад"
      }
    ],
    timestamp: "2 часа назад"
  },
  {
    id: "2",
    author: {
      name: "Анна Кузнецова",
      username: "anna_k",
      avatar: "/placeholder.svg"
    },
    content: "Делюсь своими впечатлениями от поездки на море. Было невероятно!",
    image: "/placeholder.svg",
    likes: 56,
    comments: [
      {
        id: "c3",
        author: {
          name: "Дмитрий Соколов",
          avatar: "/placeholder.svg"
        },
        content: "Выглядит потрясающе! Где это?",
        timestamp: "30 минут назад"
      }
    ],
    timestamp: "5 часов назад"
  }
];

const Index = () => {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);

  const handleCreatePost = (newPost: { content: string; image?: string }) => {
    const post: PostProps = {
      id: `post-${Date.now()}`,
      author: {
        name: "Вы",
        username: "owner",
        avatar: "/placeholder.svg"
      },
      content: newPost.content,
      image: newPost.image,
      likes: 0,
      comments: [],
      timestamp: "только что"
    };

    setPosts([post, ...posts]);
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <CreatePostForm onSubmit={handleCreatePost} />
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;