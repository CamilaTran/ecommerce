interface TagProps {
  content: string;
}

const Tag = ({ content }: TagProps) => {
  return (
    <div className="bg-amber-50 px-[9px] py-[3px] border-1 border-amber-200 w-fit rounded-full">
      <span className="text-amber-700 text-sm text-normal">{content}</span>
    </div>
  );
};

export default Tag;
