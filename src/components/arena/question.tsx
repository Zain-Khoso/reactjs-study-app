// Asset Imports.
import { IconBulb } from '@tabler/icons-react';

// Component Imports.
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { H3, Muted } from '@/components/ui/typography';

// Types.
type Props = {
  questionNumber: number;
  totalQuestions: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  questionText: string;
};

// Component used inside the arena page to show the question and its metadata.
export default function QuestionCard({
  questionNumber,
  totalQuestions,
  difficulty,
  category,
  questionText,
}: Props) {
  return (
    <Card>
      <CardContent className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="default">Q{questionNumber}</Badge>

            <Badge variant="outline">{difficulty}</Badge>
            <Badge variant="secondary">
              <IconBulb size={14} /> {category}
            </Badge>
          </div>

          <Muted className="text-muted-foreground font-medium">
            {questionNumber}/{totalQuestions} Questions
          </Muted>
        </div>

        <H3 className="leading-loose font-medium">{questionText}</H3>
      </CardContent>
    </Card>
  );
}
