import { useSelector } from 'react-redux'

const AnimeDetail = ({ animeIndex }: AnimeDetailProps) => {

  const allAnime = useSelector((state: RootStateType) => state.allAnime)
  const anime = useMemo(() => {
    for (let i = 0; i < allAnime.length; i += 1) {
      if (allAnime[i].id === animeIndex.id) {
        return allAnime[i]
      }
    }
    return animeIndex
  }, allAnime);
}
export default AnimeDetail;