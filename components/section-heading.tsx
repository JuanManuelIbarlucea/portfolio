import { ReactNode } from 'react';

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl font-medium mb-8 capitalize">{children}</h2>
    </div>
  );
}
