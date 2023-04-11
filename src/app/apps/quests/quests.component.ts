import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { Quest } from 'src/app/libs/models/quest';
import { QuestService } from 'src/app/libs/services/quest.service';
import { UserService } from 'src/app/libs/services/user.service';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss'],
})
export class QuestsComponent implements OnInit {
  public quest: Quest = new Quest();
  public questForm: FormGroup;

  public questList: Array<Quest> = [];

  public constructor(
    private readonly questService: QuestService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly formBuilder: FormBuilder
  ) {}

  public onCreateQuestSubmit(): void {
    if(this.questForm?.invalid) return;
    const questToSave: Quest = this.questForm.value;
    this.questService.createQuest(questToSave).subscribe((response) => {
      this.questList.push(response);
      this.updateTokens(this.authService.getUser().id, this.quest.questRewardTokens || 0);
    });
  }

  public ngOnInit(): void {
    this.questForm = this.initForm();
  }

  public updateTokens(idUser: number, tokens: number): void {
    this.userService.updateTokens(idUser, tokens).subscribe((response) => {});
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      answer: [this.quest.answer, Validators.required],
      description: [this.quest.description, Validators.required],
      rewardTokens: [this.quest.questRewardTokens, Validators.required],
      difficulty: [this.quest.difficulty, Validators.required],
      threshold: [this.quest.threshold, Validators.required],
    });
  }
}
