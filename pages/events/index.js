import Image from 'next/image'

const EventsPage = ({ data }) => {

    return (
        <div>
            <h1>Events Page</h1>
            <div>
                {data.map(events => (
                    <a key={events.id} href={`/events/${events.id}`}>
                        <Image src={events.image} alt={events.title} width={300} height={300}></Image>
                        <h2>{events.title}</h2>
                    </a>
                ))}
            </div>
        </div>

    )
}

export default EventsPage;

export async function getStaticProps() {
    const { events_categories } = await import('/data/data.json')

    return {
        props: {
            data: events_categories
        }
    }
}

