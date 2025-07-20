// アバウトページコンポーネント
import { 
  Container, 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Stack,
  CardActionArea
} from '@mui/material'

interface CardContainerProps {
    title: string
    subTitle: string
    content: {
        contentTitle: string
        content: string
    }[]
}
    
export const CardContainer = ({ title, subTitle, content }: CardContainerProps) => {
    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, mb: 2 }}>
                <Typography variant="h3" component="h1" gutterBottom color="primary">
                    {title}
                </Typography>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {subTitle}
                            </Typography>
                            <Stack spacing={2} direction="row">
                                {content.map((content, index) => (
                                    <Box key={index}>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {content.contentTitle}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {content.content}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Container>
    )
}