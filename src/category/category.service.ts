import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Category from 'src/posts/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: Repository<Category>) {}
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all category`;
  }

  async findOneById(id: number) {
    const category = await this.categoryRepository.findOneBy({ id });
    if (category) {
      return category;
    }
    throw new HttpException('Category does not exist', HttpStatus.NOT_FOUND);
  }

  async update(id: number, updateCategory: UpdateCategoryDto) {
    await this.categoryRepository.update(id, updateCategory);
    const updatedCategory = await this.categoryRepository.findBy({ id });
    if (updatedCategory) {
      return updatedCategory;
    }
    throw new HttpException('Category does not exist', HttpStatus.NOT_FOUND);
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
