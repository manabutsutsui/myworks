export type PublishedApp = {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: string;
  screenshot: string;
  appStoreUrl: string;
};

export const apps: PublishedApp[] = [
  {
    id: "kokugo",
    name: "国語力問題集",
    description: "語彙・文章・読解を、四択クイズで鍛える",
    features: ["語彙力・文章力・読解力を、初級から上級まで練習できます", "問題数は1,000問以上です", "毎日10分で続けられます"],
    icon: "/ios_app01/icon.png",
    screenshot: "/ios_app01/screenshot.png",
    appStoreUrl: "https://apps.apple.com/ja/app/jpquiz-intensive-training/id6754965724",
  },
  {
    id: "gendaibun",
    name: "現代文",
    description: "現代文を読んで設問に答え、読解力を鍛える",
    features: ["現代文を読んで、設問に答えます", "毎日10分で読解力を鍛えられます"],
    icon: "/ios_app02/reading.png",
    screenshot: "/ios_app02/screenshot.png",
    appStoreUrl: "https://apps.apple.com/ja/app/dokutraining-japanese/id6773627041",
  },
  {
    id: "reading-log",
    name: "読書カレンダー",
    description: "カレンダーで日々の読書を記録",
    features: ["読んだ本を本棚に並べられます", "カレンダーで読んだ日を振り返れます", "読書ステータスと日記を残せます"],
    icon: "/ios_app03/icon.png",
    screenshot: "/ios_app03/screenshot.png",
    appStoreUrl: "https://apps.apple.com/ja/app/%E8%AA%AD%E6%9B%B8%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC-%E6%97%A5%E3%80%85%E3%81%AE%E8%AA%AD%E6%9B%B8%E3%82%92%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC%E3%81%A7%E8%A8%98%E9%8C%B2-%E8%AA%AD%E6%9B%B8%E7%AE%A1%E7%90%86/id6746183055",
  },
];
