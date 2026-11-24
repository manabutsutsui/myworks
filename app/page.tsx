import Image from "next/image";
import { apps } from "@/data/apps";

const screenshotWidth = 5244;
const screenshotHeight = 2950;

export default function Home() {
  return (
    <div className="flex-1 bg-zinc-100 text-zinc-900">
      <main className="mx-auto flex w-full flex-col gap-6 px-6 py-8 sm:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {apps.map((app, index) => (
            <a key={app.id} href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={`${app.name}をApp Storeで見る`} className="flex h-full min-w-0 flex-col gap-3 rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900">
              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-[22px] border border-zinc-200 bg-zinc-50 p-1">
                  <Image src={app.icon} alt="" width={1024} height={1024} className="h-16 w-16 rounded-[18px]" sizes="64px" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <h2 className="text-xl font-bold tracking-tight">{app.name}</h2>
                  <p className="text-sm leading-6 text-zinc-600">{app.description}</p>
                </div>
              </div>

              <Image src={app.screenshot} alt="" width={screenshotWidth} height={screenshotHeight} className="h-auto w-full rounded-2xl border border-zinc-200" sizes="(min-width: 768px) 30vw, 100vw" priority={index === 0} />
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
