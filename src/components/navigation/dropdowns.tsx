// Asset Imports.
import { IconBellFilled } from '@tabler/icons-react';

// Component Imports.
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

// Types.
type UserDropdownProps = {
  user: any;
};

// User dropdown menu used in the navbar.
function UserDropdown({ user }: UserDropdownProps) {
  return (
    <Avatar className="group cursor-pointer">
      <AvatarImage src={user.image} alt={user.name} />
      <AvatarFallback className="group-hover:text-primary">
        {user.name?.charAt(0) || 'U'}
      </AvatarFallback>
    </Avatar>
  );
}

// Notifications dropdown menu used in the navbar.
function NotificationsDropdown() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-muted-foreground hover:text-primary rounded-full"
    >
      <IconBellFilled size={20} />
    </Button>
  );
}

export { UserDropdown, NotificationsDropdown };
