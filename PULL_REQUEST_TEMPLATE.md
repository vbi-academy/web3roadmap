# Pull Request Template

## Description

Please provide a brief description of the changes in this pull request.

## Type of Contribution

Please check the type of contribution this PR represents:

- [ ] Adding a New Roadmap
- [ ] Adding Content for Topics and Subtopics
- [ ] Bug fix
- [ ] Enhancement
- [ ] Documentation update

## Checklist for Adding a New Roadmap

If you're adding a new roadmap, please confirm you've completed the following steps:

- [ ] Created a new directory at `src/data/roadmaps/{roadmapId}`
- [ ] Added `{roadmapId}.json` file with the correct structure
- [ ] Added `{roadmapId}.md` file with the required frontmatter
- [ ] Created a content directory at `src/data/roadmaps/{roadmapId}/content`
- [ ] Added content files for topics and subtopics as `{topic_id}.md` or `{subtopic_id}.md`

## Checklist for Adding Content

If you're adding content for topics or subtopics, please confirm:

- [ ] Content follows the prescribed layout
- [ ] Resources are properly tagged with `@type@` (e.g., `@official@`, `@article@`, `@course@`, `@video@`)

## General Checklist

- [ ] I have read the [CONTRIBUTING.md](CONTRIBUTING.md) file
- [ ] My code follows the [JavaScript Standard Style](https://standardjs.com/)
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Additional Information

- Is this a breaking change? (yes/no)
- Does this change require an update to the documentation? (yes/no)
- Have you updated the documentation? (yes/no)

## Description of Changes

Please provide a more detailed description of your changes here. Include the reasoning behind the changes and any other context that might be helpful for reviewers.

## Related Issues

Please link to any related issues here. If this PR fixes an open issue, use "Fixes #[issue number]" syntax.

## Screenshots (if appropriate)

If your changes include visual elements, please add screenshots here.

## Questions or Concerns

If you have any questions or concerns about your contribution, please list them here.

Remember, you can always reach out to the project maintainers at [thaiphamngoctuong@gmail.com](mailto:thaiphamngoctuong@gmail.com) if you need further assistance.