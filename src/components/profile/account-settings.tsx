// Lib Imports.
import { motion } from 'motion/react';
import { useDispatch } from 'react-redux';

// Util Imports.
import { itemVariants } from '@/lib/motions';
import { signOut } from '@/lib/auth-client';
import { resetCurrentUser } from '@/store/user.slice';

// Component Imports.
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router';

// Component used inside profile page to interact with account settings.
export default function AccountSettings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async function () {
    await signOut();
    navigate('/login');
    dispatch(resetCurrentUser());
  };

  return (
    <motion.div variants={itemVariants}>
      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground uppercase">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full" onClick={handleLogout}>
            Logout
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
