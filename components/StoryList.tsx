export type Story = {
  category: string;
  headline: string;
  teaser: string;
};

export default function StoryList({ stories }: { stories: Story[] }) {
  const [lead, ...rest] = stories;

  return (
    <div>
      <article className="border-b border-ink/10 pb-8">
        <span className="label-caps text-xs text-rust">{lead.category}</span>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          {lead.headline}
        </h2>
        <p className="mt-3 text-ink/65">{lead.teaser}</p>
      </article>

      <ul>
        {rest.map((story, i) => (
          <li
            key={story.headline}
            className={`py-6 ${
              i < rest.length - 1 ? "border-b border-ink/10" : ""
            }`}
          >
            <span className="label-caps text-xs text-rust">
              {story.category}
            </span>
            <h3 className="mt-2 font-serif text-xl font-semibold leading-snug">
              {story.headline}
            </h3>
            <p className="mt-1.5 text-sm text-ink/60">{story.teaser}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
