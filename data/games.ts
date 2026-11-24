export type PublishedGame = {
  id: string;
  name: string;
  description: string;
  icon: string;
  screenshot: string;
  appStoreUrl?: string;
};

export const games: PublishedGame[] = [
  {
    id: "game01",
    name: "射的ゲーム",
    description: "お祭り屋台で的を撃つ",
    icon: "/game01/icon.png",
    screenshot: "/game01/screenshot.png",
    appStoreUrl: "https://apps.apple.com/ja/app/%E5%B0%84%E7%9A%84%E3%81%A7%E3%82%B2%E3%83%83%E3%83%88-%E6%99%AF%E5%93%81%E3%82%92%E7%8B%99%E3%81%84%E6%92%83%E3%81%A1/id6816583617",
  },
];
