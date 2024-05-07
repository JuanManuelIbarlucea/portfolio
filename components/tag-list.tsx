import { skillsData } from "@/lib/data";

type TagListProps = {
    tags: any;
}

export default function TagList({tags} : TagListProps) {
  return (
    <ul className="flex flex-wrap mt-4 gap-2">
      {tags.map((tag: string, index: number) => (
        <li
          className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
