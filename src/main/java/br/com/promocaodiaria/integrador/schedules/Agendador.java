package br.com.promocaodiaria.integrador.schedules;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.Trigger;
import org.springframework.scheduling.TriggerContext;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.stereotype.Component;

import br.com.promocaodiaria.integrador.pg.model.Config;
import br.com.promocaodiaria.integrador.pg.model.ProdutoPromoDiaria;
import br.com.promocaodiaria.integrador.pg.repository.ConfigRepository;
import br.com.promocaodiaria.integrador.pg.repository.ProdutoPromoDiariaRepository;
import br.com.promocaodiaria.integrador.service.ProdutoPromoDiariaService;
import lombok.extern.log4j.Log4j2;

@Component
@Log4j2
public class Agendador implements SchedulingConfigurer {

	@Autowired
	ConfigRepository configRepository;

	@Autowired
	ProdutoPromoDiariaRepository produtoPromoDiariaRepository;

	@Autowired
	ProdutoPromoDiariaService produtoPromoDiariaService;

	@Override
	public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
		taskRegistrar.addTriggerTask(new Runnable() {

			@Override
			public void run() {

				log.info("Iniciando busca de produtos a atualizar");
				
				List<ProdutoPromoDiaria> promocoes = produtoPromoDiariaRepository.findAll();

				promocoes.forEach(produto -> {
					produtoPromoDiariaService.sincronizar(produto);
				});

			}
		}, new Trigger() {

			@Override
			public Date nextExecutionTime(TriggerContext triggerContext) {
				Calendar nextExecutionTime = new GregorianCalendar();
				Date lastActualExecutionTime = triggerContext.lastActualExecutionTime();
				nextExecutionTime.setTime(lastActualExecutionTime != null ? lastActualExecutionTime : new Date());
				nextExecutionTime.add(Calendar.MILLISECOND, getNewExecutionTime());
				return nextExecutionTime.getTime();
			}
		});
	}

	private int getNewExecutionTime() {
		List<Config> config = configRepository.findAll();
		return config.get(0).getTempoScan().intValue();
	}
}
