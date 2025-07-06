import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface User {
  email: string;
  token: string;
}

type UserState = User | null | undefined;

interface InitialState {
  user: UserState;
  isLoading: boolean;
  setUser: React.Dispatch<SetStateAction<UserState>>;
  logout: () => void;
}

const AuthContext = createContext<InitialState>({
  user: undefined,
  isLoading: false,
  setUser: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserState>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadUserData() {
      try {
        setIsLoading(true);
        await Promise.resolve(setTimeout(() => {}, 2000));
        const userData = await AsyncStorage.getItem("auth");
        if (!userData) {
          setUser(null);
          return;
        }
        const parsedData = JSON.parse(userData);
        setUser(parsedData);
      } catch (error: unknown) {
        console.error("Error loading user data", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadUserData();
  }, []);

  async function logout() {
    await AsyncStorage.removeItem("auth");
    setUser(null);
    router.replace("/");
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
