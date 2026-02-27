import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Отправляем данные на твой реальный API на Vercel
        const response = await fetch("https://lotus-api-rpoz.vercel.app/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            role: "user",
            orders: [] // Создаем юзера сразу с пустым списком заказов
          }),
        });

        if (response.ok) {
          console.log("Юзер успешно синхронизирован с lotus-api");
        } else {
          const errorData = await response.json();
          console.error("API ответил ошибкой:", errorData.message);
        }
        
        return true; // Пускаем пользователя на сайт в любом случае
      } catch (error) {
        console.error("Ошибка связи с бэкендом API:", error);
        return true;
      }
    },
  },
});

export { handler as GET, handler as POST };