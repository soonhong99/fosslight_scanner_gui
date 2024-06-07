import { FC, ReactNode } from 'react';
import TokenBoxItem from '../molecules/TokenBoxItem';
import { ITextInputOption } from './TextInput';

export interface PathInfo {
  option: ITextInputOption['type'];
  path: string;
}

interface ITokenBoxProps {
  pathInfoList: PathInfo[];
  onRemoveClick: (index: number) => void;
  emptyText?: ReactNode;
}

const TokenBox: FC<ITokenBoxProps> = ({ emptyText, pathInfoList, onRemoveClick }) => {
  return (
    <div className="listbox-scroll flex h-44 w-full flex-col items-start justify-start gap-1 overflow-y-auto overflow-x-hidden rounded-lg border border-PaleGray-300 bg-white p-2">
      {pathInfoList.length === 0 ? (
        <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-1.5 self-stretch">
          {' '}
          <div className="text-center text-xs font-normal text-PaleGray-500">{emptyText}</div>
        </div>
      ) : (
        pathInfoList.map((pathInfo, index) => (
          <TokenBoxItem
            option={pathInfo.option}
            path={pathInfo.path}
            token={pathInfo.path}
            onRemoveClick={() => onRemoveClick(index)}
            key={index}
          />
        ))
      )}
    </div>
  );
};

export default TokenBox;