import { Observable } from "rxjs";

declare namespace V {
  type User = {
    id: any;
    slug: string;
    title: string;
  };

  type Repo = {
    id: any;
    slug: string;
    title: string;
    description: string;
    owner: User;

    format: string;
    size: string;
    entries: string;
    errors: string;
    updated: string;

    tags: string[];
    keywords: string[];

    visualizations: RepoVisualization[];

    body: Body;
    bodySummary: string;
  };

  type Body =
    | {
        type: "tabular";
        columns: TypeInfo[];
        cells: string[][];
      }
    | {
        type: "dictionary";
      };

  type TypeInfo = {
    type: "text" | "date" | "boolean" | "number";
    title: string;
    index: number;
  };

  type RepoVisualization = {
    id: any;
    title: string;
    type: "html" | "d3" | "webgl" | "ipyth" | string;
  };
}

declare interface IRepoState {
  readonly repo: Observable<V.Repo>;
  loadRepo(id: any, source: string): void;
}
