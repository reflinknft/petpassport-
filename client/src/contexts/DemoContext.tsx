import { createContext, useContext, useState, type ReactNode } from "react";
import { MEMBER, PETS, type Pet } from "@/lib/data";

interface DemoState {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
  points: number;
  addPoints: (n: number) => void;
  deductPoints: (n: number) => void;
  currentPet: Pet;
  setCurrentPet: (p: Pet) => void;
  pets: Pet[];
}

const DemoContext = createContext<DemoState | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [points, setPoints] = useState(MEMBER.points);
  const [currentPet, setCurrentPet] = useState<Pet>(PETS[0]);

  return (
    <DemoContext.Provider
      value={{
        loggedIn,
        login: () => setLoggedIn(true),
        logout: () => setLoggedIn(false),
        points,
        addPoints: (n) => setPoints((p) => p + n),
        deductPoints: (n) => setPoints((p) => p - n),
        currentPet,
        setCurrentPet,
        pets: PETS,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}
