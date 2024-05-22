// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kgg8L5zESHbHv5qhWQFLyJ
// Component: YdKVSVcVKD9l
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicImg as PlasmicImg__,
  PlasmicPageGuard as PlasmicPageGuard__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  initializeCodeComponentStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import PageLayout from "../../PageLayout"; // plasmic-import: IJtJ-hHQ9pyC/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: kgg8L5zESHbHv5qhWQFLyJ/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: YdKVSVcVKD9l/css

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pg1"}
            data-plasmic-override={overrides.pg1}
            className={classNames("__wab_instance", sty.pg1)}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <section
                    className={classNames(projectcss.all, sty.section__htDmo)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1___4Kt7
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{""}</React.Fragment>
                        {
                          <h1
                            className={classNames(
                              projectcss.all,
                              projectcss.h1,
                              projectcss.__wab_text,
                              sty.h1__ftyJj
                            )}
                          >
                            {"Empowered Routers"}
                          </h1>
                        }

                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    </h1>
                  </section>
                  <div
                    data-plasmic-name={"columns"}
                    data-plasmic-override={overrides.columns}
                    className={classNames(projectcss.all, sty.columns)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__xy3Xg)}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__uBnLv)}
                        displayHeight={"297px"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/empowered_1/images/emrouterspng.png",
                          fullWidth: 1200,
                          fullHeight: 1200,
                          aspectRatio: undefined
                        }}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__m1Fct)}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__xnWu)}
                        displayHeight={"297px"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/empowered_1/images/csdLogo430X175228X93Png.png",
                          fullWidth: 228,
                          fullHeight: 93,
                          aspectRatio: undefined
                        }}
                      />
                    </div>
                  </div>
                  <section
                    className={classNames(projectcss.all, sty.section__qsgrg)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kfasc
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{""}</React.Fragment>
                        {
                          <h1
                            className={classNames(
                              projectcss.all,
                              projectcss.h1,
                              projectcss.__wab_text,
                              sty.h1__vldIk
                            )}
                          >
                            {
                              "Empowering Routers: Secure & Private Internet Access\n"
                            }
                          </h1>
                        }

                        <React.Fragment>
                          {
                            "Tired of opaque, closed-source routers that offer little control and privacy? With Empower Routers, you're in charge.\n\n"
                          }
                        </React.Fragment>
                        {
                          <h2
                            className={classNames(
                              projectcss.all,
                              projectcss.h2,
                              projectcss.__wab_text,
                              sty.h2__wFr75
                            )}
                          >
                            {"Enhanced Security:\n"}
                          </h2>
                        }

                        <React.Fragment>
                          {
                            "- Control who can access your network with granular user permissions.\n- Implement firewall rules to block unwanted traffic and malicious attacks.\n- Enjoy robust encryption protocols for secure data transmission.\n\n"
                          }
                        </React.Fragment>
                        {
                          <h2
                            className={classNames(
                              projectcss.all,
                              projectcss.h2,
                              projectcss.__wab_text,
                              sty.h2__sM4Dc
                            )}
                          >
                            {"Privacy at your fingertips:\n"}
                          </h2>
                        }

                        <React.Fragment>
                          {
                            "- Open-source software gives you complete transparency and control over your router's inner workings.\n- Choose what information to share and customize your privacy settings.\n- Enjoy enhanced protection against data breaches and snooping.\n\n"
                          }
                        </React.Fragment>
                        {
                          <h2
                            className={classNames(
                              projectcss.all,
                              projectcss.h2,
                              projectcss.__wab_text,
                              sty.h2__pI8K
                            )}
                          >
                            {"Open Source: Power in your hands\n"}
                          </h2>
                        }

                        <React.Fragment>{""}</React.Fragment>
                        {
                          <h4
                            data-plasmic-name={"h4"}
                            data-plasmic-override={overrides.h4}
                            className={classNames(
                              projectcss.all,
                              projectcss.h4,
                              projectcss.__wab_text,
                              sty.h4
                            )}
                          >
                            {
                              "Empower Routers runs on the robust and reliable OpenWrt platform, giving you:\n"
                            }
                          </h4>
                        }

                        <React.Fragment>
                          {
                            "- Access to a vast library of customizable packages.\n- Constant development and support from a passionate community.\n- The freedom to modify and personalize your router's functionality."
                          }
                        </React.Fragment>
                      </React.Fragment>
                    </div>
                  </section>
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.form),
                      extendedOnValuesChange:
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["form", "value"],
                          FormWrapper_Helpers
                        ),
                      formItems: undefined,
                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "vertical",
                      mode: undefined,
                      onIsSubmittingChange:
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "isSubmitting",
                          ["form", "isSubmitting"],
                          FormWrapper_Helpers
                        ),
                      ref: ref => {
                        $refs["form"] = ref;
                      },
                      wrapperCol: { span: 16, horizontalOnly: true }
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "form.value"
                        },
                        {
                          name: "isSubmitting",
                          plasmicStateName: "form.isSubmitting"
                        }
                      ],

                      [],
                      FormWrapper_Helpers ?? {},
                      child$Props
                    );
                    return (
                      <FormWrapper
                        data-plasmic-name={"form"}
                        data-plasmic-override={overrides.form}
                        {...child$Props}
                      >
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__l97Tc
                          )}
                          label={"Name"}
                          name={"name"}
                        >
                          <AntdInput
                            className={classNames("__wab_instance", sty.input)}
                          />
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__qjs8P
                          )}
                          label={"Message"}
                          name={"message"}
                        >
                          <AntdTextArea
                            className={classNames(
                              "__wab_instance",
                              sty.textArea
                            )}
                          />
                        </FormItemWrapper>
                        <AntdButton
                          className={classNames("__wab_instance", sty.button)}
                          submitsForm={true}
                          type={"primary"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__nP5Yh
                            )}
                          >
                            {"Submit"}
                          </div>
                        </AntdButton>
                      </FormWrapper>
                    );
                  })()}
                </React.Fragment>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "pg1", "columns", "h4", "form", "input", "textArea", "button"],
  pg1: ["pg1", "columns", "h4", "form", "input", "textArea", "button"],
  columns: ["columns"],
  h4: ["h4"],
  form: ["form", "input", "textArea", "button"],
  input: ["input"],
  textArea: ["textArea"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"kgg8L5zESHbHv5qhWQFLyJ"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "kgg8L5zESHbHv5qhWQFLyJ"
    });
    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pg1: makeNodeComponent("pg1"),
    columns: makeNodeComponent("columns"),
    h4: makeNodeComponent("h4"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    textArea: makeNodeComponent("textArea"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */