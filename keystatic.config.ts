import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/blog/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        date: fields.date({ label: 'Published Date' }),
        author: fields.text({ label: 'Author Name' }),
        authorRole: fields.text({ label: 'Author Role' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    team: collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'content/team/*/',
      schema: {
        name: fields.slug({ name: { label: 'Full Name' } }),
        role: fields.text({ label: 'Role / Title' }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        linkedin: fields.text({ label: 'LinkedIn Profile URL' }),
        priority: fields.number({ label: 'Display Order' }),
      },
    }),
    products: collection({
      label: 'Products & Solutions',
      slugField: 'title',
      path: 'content/products/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Product Name' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Autonomous Intelligence', value: 'ai' },
            { label: 'Cyber-Physical Systems', value: 'cyber' },
            { label: 'Edge Infrastructure', value: 'edge' },
            { label: 'Enterprise Security', value: 'security' },
          ],
          defaultValue: 'ai',
        }),
        tagline: fields.text({ label: 'Tagline' }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        icon: fields.text({ label: 'Icon Name (Lucide)' }),
        content: fields.markdoc({ label: 'Detailed Description' }),
      },
    }),
    caseStudies: collection({
      label: 'Case Studies',
      slugField: 'title',
      path: 'content/case-studies/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Case Study Title' } }),
        client: fields.text({ label: 'Client Name' }),
        industry: fields.text({ label: 'Industry' }),
        headlineMetric: fields.text({ label: 'Headline Metric (e.g., +340% ROI)' }),
        summary: fields.text({ label: 'Executive Summary', multiline: true }),
        content: fields.markdoc({ label: 'Full Story' }),
      },
    }),
    positions: collection({
      label: 'Careers / Open Positions',
      slugField: 'title',
      path: 'content/positions/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Job Title' } }),
        department: fields.select({
          label: 'Department',
          options: [
            { label: 'Engineering', value: 'Engineering' },
            { label: 'Product & Design', value: 'Product' },
            { label: 'Research & AI', value: 'Research' },
            { label: 'Sales & Growth', value: 'Sales' },
            { label: 'Operations', value: 'Operations' },
          ],
          defaultValue: 'Engineering',
        }),
        location: fields.text({ label: 'Location (e.g. Remote / San Francisco)' }),
        type: fields.select({
          label: 'Job Type',
          options: [
            { label: 'Full-time', value: 'Full-time' },
            { label: 'Contract', value: 'Contract' },
            { label: 'Internship', value: 'Internship' },
          ],
          defaultValue: 'Full-time',
        }),
        summary: fields.text({ label: 'Short Role Summary', multiline: true }),
        content: fields.markdoc({ label: 'Job Description & Requirements' }),
      },
    }),
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'author',
      path: 'content/testimonials/*/',
      schema: {
        author: fields.slug({ name: { label: 'Author Name' } }),
        role: fields.text({ label: 'Author Role' }),
        company: fields.text({ label: 'Company Name' }),
        quote: fields.text({ label: 'Testimonial Quote', multiline: true }),
        rating: fields.number({ label: 'Rating (1-5)' }),
      },
    }),
    partners: collection({
      label: 'Partners',
      slugField: 'name',
      path: 'content/partners/*/',
      schema: {
        name: fields.slug({ name: { label: 'Partner / Client Name' } }),
        category: fields.text({ label: 'Category (e.g. Enterprise, Tech Partner)' }),
        website: fields.text({ label: 'Website URL' }),
      },
    }),
    industries: collection({
      label: 'Industries',
      slugField: 'title',
      path: 'content/industries/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Industry Name' } }),
        iconName: fields.text({ label: 'Lucide Icon Name' }),
        summary: fields.text({ label: 'Short Industry Summary', multiline: true }),
        content: fields.markdoc({ label: 'Deep Dive' }),
      },
    }),
  },
  singletons: {
    home: singleton({
      label: 'Home Page Copy',
      path: 'content/singletons/home/',
      schema: {
        announcement: fields.text({ label: 'Announcement Pill Text' }),
        headline: fields.text({ label: 'Main Value Prop Headline' }),
        subheadline: fields.text({ label: 'Sub-Headline Paragraph', multiline: true }),
      },
    }),
    about: singleton({
      label: 'About Page Copy',
      path: 'content/singletons/about/',
      schema: {
        storyTitle: fields.text({ label: 'Story Title' }),
        mission: fields.text({ label: 'Mission Statement', multiline: true }),
        vision: fields.text({ label: 'Vision Statement', multiline: true }),
      },
    }),
    techConfig: singleton({
      label: 'Technology Config',
      path: 'content/singletons/tech/',
      schema: {
        hardwareSectionEnabled: fields.checkbox({ label: 'Enable Hardware / Manufacturing Section' }),
        archTitle: fields.text({ label: 'Architecture Title' }),
        archDescription: fields.text({ label: 'Architecture Summary', multiline: true }),
      },
    }),
  },
});
