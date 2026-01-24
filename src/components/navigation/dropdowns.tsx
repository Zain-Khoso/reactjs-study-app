// Lib Imports.
import { Link, useNavigate } from 'react-router';

// Asset Imports.
import { IconBellFilled, IconLogout, IconUserFilled } from '@tabler/icons-react';

// Util Imports.
import { getInitials } from '@/lib/utils';
import { signOut } from '@/lib/auth-client';

// Component Imports.
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

// Types.
import type { User } from 'better-auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { P, Small } from '../ui/typography';

// User dropdown menu used in the navbar.
function UserDropdown({ user }: { user: User }) {
  const navigate = useNavigate();
  const initials = getInitials(user.name);

  const handleLogout = () => {
    return signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate('/signin');
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="group hover:border-primary/50 cursor-pointer border border-transparent transition-all">
          <AvatarImage src={user.image || undefined} alt={user.name} />
          <AvatarFallback className="group-hover:text-primary">{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-fit">
        <DropdownMenuLabel className="flex flex-col gap-1 px-2">
          <P className="text-lg">{user.name}</P>
          <Small>{user.email}</Small>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {[{ icon: IconUserFilled, href: '/profile', label: 'Profile' }].map(
          ({ icon: Icon, href, label }) => (
            <DropdownMenuItem asChild>
              <Link to={href} className="text-muted-foreground flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            </DropdownMenuItem>
          )
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Button variant="destructive" className="w-full" onClick={handleLogout}>
            <IconLogout className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
