export interface SelectProps {
  image_url:string,
  id:string,
  title:string,
  launch_date:string,
  episodes_counter:string, 
  views:string,
 }

export interface SeriesListProps {
  episodes_counter: string,
  id: string,
  image_url: string,
  launch_date: string,
  title: string,
  views: string,
}

export interface TrainingListProps {
  id: string,
  image_url: string,
  teacher: string,
  title: string,
}