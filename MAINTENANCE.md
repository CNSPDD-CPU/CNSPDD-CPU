# Website Maintenance Guide

This site is now organized so most future updates can be made by editing YAML files in `_data/`.

## Daily Editing Workflow

1. Open the repository on GitHub.
2. Open the relevant file under `_data/`.
3. Click the pencil icon.
4. Edit the text or copy an existing item block.
5. Click `Commit changes`.
6. Wait 1-3 minutes for GitHub Pages to publish.

## Main Data Files

- `_data/home.yml`: homepage mission cards.
- `_data/research.yml`: Research and Platforms page sections and cards.
- `_data/news.yml`: English and Chinese news items.
- `_data/people.yml`: People page template and team groups.
- `_data/publications.yml`: Publications page template and output groups.

## Adding News

Edit `_data/news.yml`.

English news:

```yml
en:
  - date: JUN 2026
    title: News title
    excerpt: One or two sentence summary.
    category: publication
    link: https://example.com
    pmid: "12345678"
```

Chinese news:

```yml
cn:
  - date: 2026年6月
    title: 新闻标题
    excerpt: 一到两句话简介。
    category: publication
    link: https://example.com
    pmid: "12345678"
```

`link` and `pmid` are optional. If there is no link, delete those two lines.

Common categories: `position`, `publication`, `award`, `presentation`.

## Editing Research Cards

Edit `_data/research.yml`.

Each card uses this structure:

```yml
- title: Card title
  copy: Card description.
```

Keep indentation consistent: two spaces for nested fields, four spaces before list items under `cards:`.

## Editing People

Edit `_data/people.yml`.

Use `groups:` for broad team categories. Later, if you want individual profiles with photos, the page can be expanded to support fields such as `name`, `role`, `photo`, `email`, and `bio`.

## Editing Publications

Edit `_data/publications.yml`.

The current page is a structured placeholder. Later, individual publication entries can use fields such as:

```yml
- title: Paper title
  authors: Author A, Author B
  journal: Journal Name
  year: 2026
  doi: https://doi.org/...
  pmid: "12345678"
```

## Safe Editing Rules

- Do not use tabs; use spaces.
- Keep colons followed by a space, like `title: Text`.
- If text contains a colon, wrap the whole value in quotes.
- For long paragraphs, keep them on one line when possible.
- Update both `en:` and `cn:` sections when the content should appear in both languages.
