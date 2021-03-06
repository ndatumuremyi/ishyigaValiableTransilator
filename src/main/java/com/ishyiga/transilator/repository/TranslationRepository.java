package com.ishyiga.transilator.repository;

import com.ishyiga.transilator.model.Translation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;


@RepositoryRestResource(collectionResourceRel="translator", path="translator")
public interface TranslationRepository extends JpaRepository<Translation, String> {
}