// Lib Imports.
import { useState } from 'react';

// Asset Imports.
import { IconTrophy, IconSelector, IconCheck } from '@tabler/icons-react';

// Util Imports.
import { cn } from '@/lib/utils';

// Component Imports
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

// Types.
type Subject = {
  value: string;
  label: string;
};
type SubjectSelectorProps = {
  subjects: Subject[];
  currentSubject: string;
  onSubjectChange: (value: string) => void;
};

// Component used inside leaderboards page to change leaderboards.
export default function SubjectSelector({
  subjects,
  currentSubject,
  onSubjectChange,
}: SubjectSelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-50 justify-between lg:w-64">
          <div className="flex items-center gap-2">
            <IconTrophy size={18} className="text-primary" />
            {currentSubject}
          </div>
          <IconSelector size={16} className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="border-border w-50 p-0 shadow-xl lg:w-64">
        <Command>
          <CommandInput placeholder="Search subject..." />
          <CommandList>
            <CommandEmpty>No subject found.</CommandEmpty>
            <CommandGroup>
              {subjects.map((s) => (
                <CommandItem
                  key={s.value}
                  onSelect={() => {
                    onSubjectChange(s.value);
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  <IconCheck
                    size={16}
                    className={cn('mr-2', currentSubject === s.value ? 'opacity-100' : 'opacity-0')}
                  />
                  {s.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
