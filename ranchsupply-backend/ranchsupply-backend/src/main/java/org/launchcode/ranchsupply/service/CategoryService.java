package org.launchcode.ranchsupply.service;

import org.launchcode.ranchsupply.model.Category;
import org.launchcode.ranchsupply.model.dto.CategoryDto;
import org.launchcode.ranchsupply.repository.CategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    //to add Category
    public CategoryDto addCategory(CategoryDto categoryDto){
        Category category = modelMapper.map(categoryDto, Category.class);
        Category savedCategory = categoryRepository.save(category);
        return modelMapper.map(savedCategory,CategoryDto.class);
    }

    // Get All the categories
    public List<CategoryDto> getAllCategories(){
        List<Category> categories = categoryRepository.findAll();
        return categories.stream().map((category) -> modelMapper.map(category,CategoryDto.class))
                .collect(Collectors.toList());
    }
}
