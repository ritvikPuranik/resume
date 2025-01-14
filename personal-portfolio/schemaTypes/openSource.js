import { ActivityIcon } from "@sanity/icons";

export default {
    name: 'openSource',
    type: 'document',
    title: 'Open Source Contributions',
    icon: ActivityIcon,

    fields: [
        {
            name: 'repository',
            type: 'string',
            title: 'Repository',
            description: 'Title of the open source project'
        },
        {
            name: 'stars',
            type: 'string',
            title: 'Stars for the Repository',
            description: 'Number of Stars for the repository. Indicates how popular the repository is.'
        },
        {
            name: 'repositoryLink',
            type: 'url',
            title: 'Respository Link',
            description: 'Link to the repository'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'Brief description of your contribution'
        },
        {
            name: 'commitLink',
            type: 'url',
            title: 'Commit Link',
            description: 'Link to your commit'
        },
        {
            name: 'contributionDate',
            type: 'datetime',
            title: 'Contribution Date',
            description: 'Date when the contribution was made'
        },
    ],
    preview: {
        select: {
            title: "repository",
            stars: "stars",
        },
        prepare(selection) {
            return {
                title: `${selection.title ? `${selection.title}: ${selection.stars} stars` : ""}`,
            };
        },
    },
}