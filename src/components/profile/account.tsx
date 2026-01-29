// Lib Imports.
import { motion } from 'motion/react';

// Util Imports.
import { itemVariants } from '@/lib/motions';
import { signOut } from '@/lib/auth-client';

// Component Imports.
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';

// Component used inside profile page to interact with account settings.
export default function AccountSettings() {
  return (
    <motion.div variants={itemVariants}>
      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground uppercase">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full" onClick={() => signOut()}>
            Logout
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
