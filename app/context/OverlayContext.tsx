// app/context/OverlayContext.tsx
/*
メニューの開閉状態（オーバーレイの表示/非表示）を
アプリ全体で共有するための Context（共有箱）を定義しています。

- createContext : Context（共有箱）を作る
- Provider      : 状態と操作関数を入れて配る
- useOverlay    : Context から値を取り出す専用フック
*/
import { createContext, useContext, useState } from "react";

// Context の型定義と初期値を用意
// isOpen : メニューが開いているかどうかの状態
// open   : メニューを開く関数
// close  : メニューを閉じる関数
const OverlayContext = createContext<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
}>({
  // デフォルト値（Provider 外で使ったときの保険）
  isOpen: false,
  open: () => {},
  close: () => {},
});

// Provider コンポーネント
// 子コンポーネントに対して OverlayContext の値を供給する
export const OverlayProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // メニューの開閉状態を管理する state
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Context に値を入れて配る（Provider で囲んだ子に渡る）
    <OverlayContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

// Context の値を取り出すためのカスタムフック
// useContext を直接呼ばずにこちらを使う
export const useOverlay = () => useContext(OverlayContext);
