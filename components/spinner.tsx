type SpinnerProps = {
  className?: string;
};

export default function Spinner({ className = "" }: SpinnerProps) {
  return (
    <div className={`flex justify-center items-center py-10 ${className}`}>
      <div className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-white/20 border-t-gray-900 dark:border-t-white animate-spin" />
    </div>
  );
}
