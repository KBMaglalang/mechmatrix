import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode, // position = 'bottom',
}: {
  title: string;
  amount: string;
  currencyCode: string;
  // position?: 'bottom' | 'center';
}) => {
  return (
    <div className={clsx('center absolute bottom-0 left-0 flex w-full @container/label')}>
      <div className="flex w-full items-center bg-white/70 text-xs font-semibold text-black backdrop-blur-md">
        <h3 className="mr-4 line-clamp-2 flex-grow px-4 leading-none tracking-tight">{title}</h3>
        <Price
          className="flex-none bg-slate-500 px-4 py-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
