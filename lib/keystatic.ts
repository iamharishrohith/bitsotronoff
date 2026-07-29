import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const keystaticReader = createReader(process.cwd(), config);

export async function getHomePageData() {
  try {
    const data = await keystaticReader.singletons.home.read();
    return data;
  } catch (error) {
    console.error('Error reading home singleton:', error);
    return null;
  }
}

export async function getAboutPageData() {
  try {
    const data = await keystaticReader.singletons.about.read();
    return data;
  } catch (error) {
    console.error('Error reading about singleton:', error);
    return null;
  }
}

export async function getTechConfigData() {
  try {
    const data = await keystaticReader.singletons.techConfig.read();
    return data;
  } catch (error) {
    console.error('Error reading tech singleton:', error);
    return null;
  }
}

export async function getTeamMembers() {
  try {
    const teamList = await keystaticReader.collections.team.all();
    return teamList.sort((a, b) => (a.entry.priority || 0) - (b.entry.priority || 0));
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

export async function getProducts() {
  try {
    return await keystaticReader.collections.products.all();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  try {
    return await keystaticReader.collections.products.read(slug);
  } catch (error) {
    console.error(`Error fetching product ${slug}:`, error);
    return null;
  }
}

export async function getOpenPositions() {
  try {
    return await keystaticReader.collections.positions.all();
  } catch (error) {
    console.error('Error fetching open positions:', error);
    return [];
  }
}

export async function getCaseStudies() {
  try {
    return await keystaticReader.collections.caseStudies.all();
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    return await keystaticReader.collections.caseStudies.read(slug);
  } catch (error) {
    console.error(`Error fetching case study ${slug}:`, error);
    return null;
  }
}

export async function getTestimonials() {
  try {
    return await keystaticReader.collections.testimonials.all();
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export async function getPartners() {
  try {
    return await keystaticReader.collections.partners.all();
  } catch (error) {
    console.error('Error fetching partners:', error);
    return [];
  }
}

export async function getIndustries() {
  try {
    return await keystaticReader.collections.industries.all();
  } catch (error) {
    console.error('Error fetching industries:', error);
    return [];
  }
}
