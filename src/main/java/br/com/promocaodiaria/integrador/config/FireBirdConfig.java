package br.com.promocaodiaria.integrador.config;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariDataSource;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(entityManagerFactoryRef = "fireEntityManagerFactory", transactionManagerRef = "fireTransactionManager", basePackages = "br.com.promocaodiaria.integrador.fire")
public class FireBirdConfig {
	
	@Primary
	@Bean(name = "fireDataSource")
	@ConfigurationProperties(prefix = "spring.datasource")
	public HikariDataSource fireDataSource() {
		return DataSourceBuilder.create()
                .type(HikariDataSource.class)
                .build();
	}

	@Primary
	@Bean(name = "fireEntityManagerFactory")
	public LocalContainerEntityManagerFactoryBean fireEntityManagerFactory(EntityManagerFactoryBuilder builder,
			@Qualifier("fireDataSource") DataSource dataSource) {
		return builder.dataSource(dataSource).packages("br.com.promocaodiaria.integrador.fire.model")
				.persistenceUnit("firePU").build();
	}

	@Primary
	@Bean(name = "fireTransactionManager")
	public PlatformTransactionManager fireeTransactionManager(
			@Qualifier("fireEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
		return new JpaTransactionManager(entityManagerFactory);
	}

}
