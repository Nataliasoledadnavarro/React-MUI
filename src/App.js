import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';



const App = () => {
  return (<div>
    <Box sx={{ width: 300, ml: 6 }}>
      <Card >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h4">
            be•nev•o•lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">Learn More</Button>
        </CardActions>
      </Card>
    </Box>

    <Box sx={{ width: 300, ml: 6, mt: 6 }}>
      <Card>
        <CardMedia
          component="img"
          height="180"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Tn4Tii4Am8pr3qK79nyhnfeVA7JBwGArJw&usqp=CAU"
          alt="pintura de colores variados"
        />
        <CardContent>
          <Typography variant="h5">
            Our Changing Planet
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            By Kurt Wagner
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, wi
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">Share</Button>
          <Button size="small" color="secondary">Learn More</Button>
          <IconButton aria-label="corazon">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="compartir">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>

    <Box sx={{ width: 300, ml: 6, mt: 6 }}>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          height="220"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKe-euh43pWhL6aunOHYhGkvQL27WfSjVtg&usqp=CAU"
          alt="pintura de colores azules"
          sx={{ width: 200, m: 2 }}
        />

        <CardActions sx={{ width: 80, display: 'flex', flexDirection: "column", alignItems: "center", mt: 1 }}>
          <IconButton aria-label="corazon">
            <FavoriteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="marcar" sx={{ m: 0 }}>
            <BookmarkIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="compartir" sx={{ m: 0 }}>
            <ShareIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    </Box>

    <Box sx={{ width: 300, ml: 6, mt: 6 }}>
      <Card>
        <CardMedia
          component="img"
          height="180"
          image="https://media-cdn.tripadvisor.com/media/photo-s/13/52/95/37/desayuno-light.jpg"
          alt="Mesa de cafeteria. Desayuno completo."
        />
        <CardContent>
          <Typography variant="h5">
            Cafe Badilico
          </Typography>
          <Stack spacing={1} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
            <Typography variant="body2" color="text.secondary">
              4.5 (413)
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.primary" sx={{ mb: 2, mt: 2 }}>
            $ • Italian, Cafe
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12 }}>
            Small plates, salads & sandwiches an intimate setting with 12 indoor sears plus patio seating.
          </Typography>
          <Divider variant="large" sx={{ mb: 2, mt: 2 }} />
          <Typography variant="body2" color="text.primary" sx={{ mb: 1, mt: 2, fontWeight: 500 }}>
            Tonight´s availability
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="5:30 PM" size="small" sx={{ height: 30 }} />
            <Chip label="7:30 pm" size="small" color="primary" sx={{ height: 30 }} />
            <Chip label="8:00 pm" size="small" sx={{ height: 30 }} />
            <Chip label="9:00 pm" size="small" sx={{ height: 30 }} />
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="media" color="secondary" sx={{ fontWeight: 500 }}>RESERVE</Button>
        </CardActions>
      </Card>
    </Box>
  </div>)

}

export default App;
