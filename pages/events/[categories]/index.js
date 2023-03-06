const EventsCategoriesPage = ({data}) => {
    return (
        <div>
            <h1>Events in London</h1>
            <a href='/events/event1'> Event 1</a>
            <a href='/events/event2'> Event 2</a>
            <a href='/events/event3'> Event 3</a>
            <a href='/events/event4'> Event 4</a>
            <a href='/events/event5'> Event 5</a>
            <a href='/events/event6'> Event 6</a>
        </div>

    )
}

export default EventsCategoriesPage

export async function getStaticPaths() {

    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map(events => {
        return {
            params: {
                categories: events.id.toString(),
            },
        };
    });

    console.log(allPaths);


    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    console.log(context);
    const id = context.params.categories;
    const { allEvents } = await import('/data/data.json');

    const data = allEvents.filter(events => events.city === id)
    console.log(data)

    return {props: {data : data}}
}