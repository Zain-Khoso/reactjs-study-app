// Asset Imports.
import { Button } from '@/components/ui/button';

// Types.
type Option = {
  id: string;
  text: string;
};

type OptionsGroupProps = {
  options: Option[];
  selectedOption: string | null;
  onSelect: (id: string) => void;
};

type OptionButtonProps = {
  option: Option;
  isSelected: boolean;
  onClick: () => void;
};

// Component used inside the arena page to list a question's options.
export default function OptionsGroup({ options, selectedOption, onSelect }: OptionsGroupProps) {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
      {options.map((option) => (
        <OptionButton
          key={`question-option-${option.id}`}
          option={option}
          isSelected={selectedOption === option.id}
          onClick={() => onSelect(option.id)}
        />
      ))}
    </section>
  );
}

// Option component for an arena question.
function OptionButton({ option, isSelected, onClick }: OptionButtonProps) {
  return (
    <Button
      variant={isSelected ? 'default' : 'secondary'}
      className={'rounded-lg py-8 font-medium'}
      onClick={onClick}
    >
      {option.text}
    </Button>
  );
}
